# GitHub Deployment Setup Guide

This guide explains how to set up the GitHub deployment feature that allows you to deploy your site by clicking the Publish button in the Admin dashboard.

## Overview

The deployment system consists of:
1. A Supabase database to store deployment settings and logs (with user-based security)
2. A Supabase Edge Function that triggers GitHub Actions
3. A GitHub Actions workflow that builds and deploys your site
4. An Admin dashboard with a Publish button

## Prerequisites

- GitHub account with repository access
- Supabase project configured
- GitHub Personal Access Token
- User account in your application (for authentication)

## Setup Steps

### 1. Create a GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a descriptive name like "Carbey Deploy Token"
4. Select the following scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
5. Click "Generate token"
6. **IMPORTANT**: Copy the token immediately and save it securely

### 2. Configure Deployment Settings in Database

You need to insert your deployment settings into the Supabase database with your user ID.

**Step 2a: Get your User ID**

First, find your user ID in the Supabase SQL Editor:

```sql
SELECT id, email FROM auth.users WHERE email = 'your@email.com';
```

Replace `your@email.com` with your actual email address.

**Step 2b: Insert Deployment Settings**

Run this SQL query in the Supabase SQL Editor:

```sql
INSERT INTO deployment_settings (user_id, github_token, repository_url, branch)
VALUES (
  'your-user-id-from-step-2a',
  'your_github_token_from_step_1',
  'https://github.com/kaguya0107/carbey',
  'main'
);
```

Replace:
- `your-user-id-from-step-2a` with the ID you got from Step 2a
- `your_github_token_from_step_1` with the GitHub token from Step 1

### 3. Verify GitHub Workflow File

The GitHub workflow file should already be in your repository at `.github/workflows/deploy.yml`. Make sure it's committed and pushed to GitHub.

### 4. Access the Admin Dashboard

1. Navigate to `/admin` on your website
2. You should see the Admin Dashboard with a "Publish to GitHub" button

### 5. Test the Deployment

1. Click the "Publish to GitHub" button
2. You should see a success message
3. Check your GitHub repository's Actions tab to see the workflow running
4. The deployment logs will appear in the Admin dashboard

## How It Works

1. When you click "Publish to GitHub", the PublishButton component calls the Supabase Edge Function
2. The Edge Function authenticates you and retrieves YOUR deployment settings from the database
3. It uses the GitHub API to trigger a workflow dispatch event
4. GitHub Actions receives the event and runs the deploy workflow
5. The workflow builds your project and prepares it for deployment
6. Deployment logs are stored in the database with your user ID for tracking

## Security Features

- **User-based Access Control**: Each user can only access their own deployment settings
- **Row Level Security (RLS)**: Database policies ensure data isolation between users
- **Authentication Required**: All deployment operations require valid authentication
- **Secure Token Storage**: GitHub tokens are stored securely in the database

## Troubleshooting

### "Deployment settings not configured" error
- Make sure you've inserted deployment settings with YOUR user_id (Step 2)
- Verify the settings exist by running:
  ```sql
  SELECT * FROM deployment_settings WHERE user_id = auth.uid();
  ```

### GitHub API authentication errors
- Check that your GitHub token is valid and not expired
- Verify the token has the correct scopes (`repo` and `workflow`)
- Ensure the repository URL is correct

### Workflow not triggering
- Check that the workflow file exists in `.github/workflows/deploy.yml`
- Verify the workflow has the correct triggers (`repository_dispatch` and `workflow_dispatch`)
- Check GitHub Actions is enabled for your repository

### CORS errors
- The Edge Function includes proper CORS headers
- Make sure your environment variables are set correctly

### RLS Policy errors
- Ensure you're logged in when accessing the admin panel
- Verify your authentication token is valid
- Check that your user_id matches the settings you're trying to access

## Accessing the Admin Dashboard

Visit: `https://your-domain.com/admin`

You must be logged in to use the deployment features.

## Environment Variables Required

Make sure these are set in your project:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

These should already be in your `.env` file.

## Additional Configuration

For information about configuring the Auth DB Connection Strategy and other security settings, see `SUPABASE_SECURITY_CONFIG.md`.
