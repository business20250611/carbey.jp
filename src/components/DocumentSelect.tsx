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
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1F2F4D' }}>
            ご希望の資料をお選びください
          </h1>
          <p className="text-lg text-gray-600">
            各サービスの詳細資料をご用意しております
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6 mx-auto">
                <Car className="h-8 w-8 text-blue-600" />
              </div>

              <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#1F2F4D' }}>
                Carbey
              </h2>

              <p className="text-center text-gray-600 mb-3 font-medium text-lg">
                中古車フランチャイズ
              </p>

              <p className="text-center text-gray-700 mb-8 leading-relaxed">
                誰でも車屋になれるビジネスモデル
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">初期投資を抑えた開業が可能</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">充実したサポート体制</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">実績のあるビジネスモデル</p>
                </div>
              </div>

              <button
                onClick={() => handleDocumentRequest('carbey')}
                className="w-full bg-[#1F2F4D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2A3F5F] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              >
                <FileText className="h-5 w-5" />
                <span>Carbeyの資料を請求する</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6 mx-auto">
                <Globe className="h-8 w-8 text-green-600" />
              </div>

              <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#1F2F4D' }}>
                E-Flow
              </h2>

              <p className="text-center text-gray-600 mb-3 font-medium text-lg">
                越境物販フランチャイズ
              </p>

              <p className="text-center text-gray-700 mb-8 leading-relaxed">
                在宅で始めるグローバル物販
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">在宅で完結するビジネス</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">グローバル市場へアクセス</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">柔軟な働き方が可能</p>
                </div>
              </div>

              <button
                onClick={() => handleDocumentRequest('eflow')}
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              >
                <FileText className="h-5 w-5" />
                <span>E-Flowの資料を請求する</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentSelect;
