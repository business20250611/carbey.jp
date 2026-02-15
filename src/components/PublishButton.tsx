import React, { useState } from 'react';
import { Rocket, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'react-toastify';

const PublishButton: React.FC = () => {
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStatus, setDeployStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handlePublish = async () => {
    try {
      setIsDeploying(true);
      setDeployStatus('idle');

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase configuration not found');
      }

      const apiUrl = `${supabaseUrl}/functions/v1/github-deploy`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Deployment triggered at ${new Date().toLocaleString()}`,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Deployment failed');
      }

      setDeployStatus('success');
      toast.success('Deployment triggered successfully! Your changes will be live shortly.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } catch (error) {
      console.error('Deployment error:', error);
      setDeployStatus('error');
      toast.error(
        error instanceof Error ? error.message : 'Failed to trigger deployment',
        {
          position: 'top-right',
          autoClose: 5000,
        }
      );
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <button
      onClick={handlePublish}
      disabled={isDeploying}
      className={`
        relative inline-flex items-center gap-3 px-8 py-4 rounded-lg
        font-semibold text-lg transition-all duration-300
        ${
          isDeploying
            ? 'bg-gray-400 cursor-not-allowed'
            : deployStatus === 'success'
            ? 'bg-green-600 hover:bg-green-700'
            : deployStatus === 'error'
            ? 'bg-red-600 hover:bg-red-700'
            : 'bg-blue-600 hover:bg-blue-700'
        }
        text-white shadow-lg hover:shadow-xl
        disabled:opacity-70 disabled:cursor-not-allowed
      `}
    >
      {isDeploying ? (
        <>
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Deploying...</span>
        </>
      ) : deployStatus === 'success' ? (
        <>
          <CheckCircle className="w-6 h-6" />
          <span>Deployed Successfully</span>
        </>
      ) : deployStatus === 'error' ? (
        <>
          <AlertCircle className="w-6 h-6" />
          <span>Deployment Failed</span>
        </>
      ) : (
        <>
          <Rocket className="w-6 h-6" />
          <span>Publish to GitHub</span>
        </>
      )}
    </button>
  );
};

export default PublishButton;
