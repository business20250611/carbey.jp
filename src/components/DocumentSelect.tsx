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
            各サービスの詳細資料をご用意しております
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: '#FF6B6B' }}>
            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-30 mb-6 mx-auto">
                <Car className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-center mb-4 text-white">
                Carbey
              </h2>

              <p className="text-center text-white mb-3 font-medium text-lg opacity-95">
                中古車フランチャイズ
              </p>

              <p className="text-center text-white mb-8 leading-relaxed opacity-90">
                誰でも車屋になれるビジネスモデル
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white opacity-90">初期投資を抑えた開業が可能</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white opacity-90">充実したサポート体制</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white opacity-90">実績のあるビジネスモデル</p>
                </div>
              </div>

              <button
                onClick={() => handleDocumentRequest('carbey')}
                className="w-full bg-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg" style={{ color: '#FF6B6B' }}
              >
                <FileText className="h-5 w-5" />
                <span>Carbeyの資料を請求する</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: '#3B7DD6' }}>
            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-30 mb-6 mx-auto">
                <Globe className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-center mb-4 text-white">
                E-Flow
              </h2>

              <p className="text-center text-white mb-3 font-medium text-lg opacity-95">
                越境物販フランチャイズ
              </p>

              <p className="text-center text-white mb-8 leading-relaxed opacity-90">
                在宅で始めるグローバル物販
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white opacity-90">在宅で完結するビジネス</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white opacity-90">グローバル市場へアクセス</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white opacity-90">柔軟な働き方が可能</p>
                </div>
              </div>

              <button
                onClick={() => handleDocumentRequest('eflow')}
                className="w-full bg-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg" style={{ color: '#3B7DD6' }}
              >
                <FileText className="h-5 w-5" />
                <span>E-Flowの資料を請求する</span>
                <ArrowRight className="h-5 w-5" />
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
