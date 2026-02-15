import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface DeploymentRequest {
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Authorization required",
        }),
        {
          status: 401,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid authentication",
        }),
        {
          status: 401,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { message = "Deploy from publish button" }: DeploymentRequest = await req.json().catch(() => ({}));

    const { data: settings, error: settingsError } = await supabase
      .from("deployment_settings")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();

    if (settingsError || !settings) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Deployment settings not configured. Please configure GitHub settings first.",
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const logEntry = {
      user_id: user.id,
      status: "in_progress",
      message: message,
      deployed_at: new Date().toISOString(),
    };

    const { data: log, error: logError } = await supabase
      .from("deployment_logs")
      .insert(logEntry)
      .select()
      .single();

    if (logError) {
      throw new Error(`Failed to create deployment log: ${logError.message}`);
    }

    const repoMatch = settings.repository_url.match(/github\.com\/([^\/]+)\/([^\/\.]+)/);
    if (!repoMatch) {
      await supabase
        .from("deployment_logs")
        .update({ status: "failed", message: "Invalid repository URL format" })
        .eq("id", log.id);

      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid repository URL format",
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const [, owner, repo] = repoMatch;

    const workflowResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/actions/workflows`,
      {
        headers: {
          Authorization: `Bearer ${settings.github_token}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Supabase-Edge-Function",
        },
      }
    );

    if (!workflowResponse.ok) {
      const errorText = await workflowResponse.text();
      await supabase
        .from("deployment_logs")
        .update({
          status: "failed",
          message: `GitHub API error: ${errorText}`,
        })
        .eq("id", log.id);

      return new Response(
        JSON.stringify({
          success: false,
          error: `GitHub API error: ${errorText}`,
        }),
        {
          status: workflowResponse.status,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const workflows = await workflowResponse.json();
    const deployWorkflow = workflows.workflows?.find(
      (w: any) => w.name === "Deploy" || w.path.includes("deploy")
    );

    if (!deployWorkflow) {
      const dispatchResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/dispatches`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${settings.github_token}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
            "User-Agent": "Supabase-Edge-Function",
          },
          body: JSON.stringify({
            event_type: "deploy",
            client_payload: {
              message: message,
              timestamp: new Date().toISOString(),
            },
          }),
        }
      );

      if (!dispatchResponse.ok) {
        const errorText = await dispatchResponse.text();
        await supabase
          .from("deployment_logs")
          .update({
            status: "failed",
            message: `Failed to trigger deployment: ${errorText}`,
          })
          .eq("id", log.id);

        return new Response(
          JSON.stringify({
            success: false,
            error: `Failed to trigger deployment: ${errorText}`,
          }),
          {
            status: dispatchResponse.status,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }
    } else {
      const dispatchResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${deployWorkflow.id}/dispatches`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${settings.github_token}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
            "User-Agent": "Supabase-Edge-Function",
          },
          body: JSON.stringify({
            ref: settings.branch,
            inputs: {
              message: message,
            },
          }),
        }
      );

      if (!dispatchResponse.ok) {
        const errorText = await dispatchResponse.text();
        await supabase
          .from("deployment_logs")
          .update({
            status: "failed",
            message: `Failed to trigger workflow: ${errorText}`,
          })
          .eq("id", log.id);

        return new Response(
          JSON.stringify({
            success: false,
            error: `Failed to trigger workflow: ${errorText}`,
          }),
          {
            status: dispatchResponse.status,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          }
        );
      }
    }

    await supabase
      .from("deployment_logs")
      .update({
        status: "success",
        message: "Deployment triggered successfully",
      })
      .eq("id", log.id);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Deployment triggered successfully",
        log_id: log.id,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Deployment error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
