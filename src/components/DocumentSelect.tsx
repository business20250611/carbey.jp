import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Globe, FileText, ArrowRight } from 'lucide-react';

const DocumentSelect: React.FC = () => {
  const navigate = useNavigate();

  const handleDocumentRequest = (type: 'carbey' | 'eflow') => {
    navigate(`/contact?type=document&service=${type}&t=${Date.now()}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#FFF5F3' }}>
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1F2F4D' }}>
            ご希望の資料をお選びください
          </h1>
          <p className="text-lg" style={{ color: '#666' }}>
            当社では複数のフランチャイズ事業を展開しています。ご希望の資料をお選びください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            onClick={() => handleDocumentRequest('carbey')}
            className="rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ backgroundColor: '#FF6B6B' }}
          >
            <div className="p-10 flex flex-col items-center justify-center min-h-[320px]">
              <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-white">
                <Car className="h-8 w-8" style={{ color: '#FF6B6B' }} />
              </div>

              <h2 className="text-2xl font-bold text-center mb-3 text-white">
                Carbey（カーベイ）
              </h2>

              <p className="text-center text-white mb-8 opacity-90 text-base">
                誰でも車屋になれるビジネスモデル
              </p>

              <button
                className="w-full max-w-xs bg-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-opacity-90 transition-all duration-200 shadow-lg pointer-events-none" style={{ color: '#FF6B6B' }}
              >
                資料請求する
              </button>
            </div>
          </div>

          <div
            onClick={() => handleDocumentRequest('eflow')}
            className="rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ backgroundColor: '#3B7DD6' }}
          >
            <div className="p-10 flex flex-col items-center justify-center min-h-[320px]">
              <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-white">
                <Globe className="h-8 w-8" style={{ color: '#3B7DD6' }} />
              </div>

              <h2 className="text-2xl font-bold text-center mb-3 text-white">
                E-Flow（イーフロー）
              </h2>

              <p className="text-center text-white mb-8 opacity-90 text-base">
                在宅で始めるグローバル物販
              </p>

              <button
                className="w-full max-w-xs bg-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-opacity-90 transition-all duration-200 shadow-lg pointer-events-none" style={{ color: '#3B7DD6' }}
              >
                資料請求する
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p style={{ color: '#666' }}>
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentSelect;
