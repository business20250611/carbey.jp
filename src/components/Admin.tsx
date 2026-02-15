import React, { useState, useEffect } from 'react';
import { Settings, History, Rocket, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PublishButton from './PublishButton';

interface DeploymentLog {
  id: string;
  status: string;
  message: string;
  deployed_at: string;
  created_at: string;
}

const Admin: React.FC = () => {
  const [deploymentLogs, setDeploymentLogs] = useState<DeploymentLog[]>([]);
  const [isLoadingLogs, setIsLoadingLogs] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoadingLogs(false);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'failed':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return '✓';
      case 'failed':
        return '✗';
      case 'in_progress':
        return '⟳';
      default:
        return '○';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
            <div className="flex items-center gap-4">
              <Settings className="w-12 h-12" />
              <div>
                <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-blue-100 text-lg">Manage deployments and site updates</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 mb-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-800">ニュース記事管理</h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                記事を作成・編集して下書き保存し、準備ができたら公開できます。
              </p>
              <Link
                to="/admin/news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
              >
                <FileText className="w-5 h-5" />
                記事を管理
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Deploy to Production</h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Click the button below to trigger a deployment to GitHub. This will build and deploy your latest changes to production.
              </p>
              <PublishButton />
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <History className="w-8 h-8 text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-800">Deployment History</h2>
              </div>

              {isLoadingLogs ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  <p className="mt-4 text-gray-600">Loading deployment history...</p>
                </div>
              ) : deploymentLogs.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
                  <Rocket className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No deployments yet</p>
                  <p className="text-gray-400 mt-2">Click the publish button above to start your first deployment</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {deploymentLogs.map((log) => (
                    <div
                      key={log.id}
                      className={`p-4 rounded-lg border-2 ${getStatusColor(log.status)} transition-all duration-200 hover:shadow-md`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{getStatusIcon(log.status)}</span>
                          <div>
                            <p className="font-semibold text-lg capitalize">{log.status.replace('_', ' ')}</p>
                            <p className="text-sm opacity-80">{log.message || 'No message'}</p>
                          </div>
                        </div>
                        <div className="text-right text-sm opacity-75">
                          <p>{new Date(log.deployed_at || log.created_at).toLocaleDateString()}</p>
                          <p>{new Date(log.deployed_at || log.created_at).toLocaleTimeString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
