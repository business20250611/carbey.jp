import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, TrendingUp, Globe, ShoppingCart, Zap, Shield, RotateCw } from 'lucide-react';

const EFlow: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <ShoppingCart className="w-16 h-16 text-white" />,
      title: '商品選定',
      description: '国内サイトで魅力的な商品を選定。\n本部のノウハウをもとに、誰でも簡単に商品選定ができます。'
    },
    {
      icon: <Globe className="w-16 h-16 text-white" />,
      title: '海外サイト出品',
      description: '独自の自動ツールを使用し、海外ECサイトへ効率的に商品を出品します。'
    },
    {
      icon: <Package className="w-16 h-16 text-white" />,
      title: '商品の発送',
      description: '商品が売れたら梱包・発送を行い、スムーズなお届けを実現します。'
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-white" />,
      title: '売上の入金',
      description: 'キャッシュフローが速く、継続的にビジネスサイクルを回していくことができます。'
    }
  ];

  const businessModel = [
    {
      title: '出品作業の効率化',
      description: '本部独自のツールを使用することで、海外ECサイトへの出品を効率的に行えます。属人性に左右されず、再現性の高い運用が可能です。'
    },
    {
      title: '低リスクで始められる運用モデル',
      description: '在庫を持たずに運用できる仕組みのため、資金リスクを抑えてスタート可能です。'
    },
    {
      title: '資金回転の速い収益モデル',
      description: '売上の入金サイクルが早く、資金効率に優れた運用が可能です。資金を止めずに回し続けられるため、安定した事業運用につながります。'
    }
  ];

  const handleContactClick = () => {
    navigate('/contact?type=contact');
    window.scrollTo(0, 0);
  };

  const handleDocumentRequestClick = () => {
    alert('E-Flowの資料請求は現在準備中です。もうしばらくお待ちください。');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Logo Section */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-center">
          <img
            src="/eflow_transparent.png"
            alt="E-Flow Logo"
            className="h-12"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/img4.webp")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-slate-800/80 to-gray-900/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            E-FLOW
          </h1>
          <p className="text-2xl mb-4 text-blue-100">
            グローバル越境ECプラットフォーム
          </p>
          <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
            日本の優れた商品を世界へ。
          </p>
        </div>
      </section>

      {/* Video Section - Coming Soon */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative w-full aspect-video bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800 rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">動画準備中</h2>
                <p className="text-gray-300">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Flow Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              E-Flowの流れ
            </h2>
            <p className="text-xl text-blue-600 font-medium">
              シンプルで効率的な4つのステップ
            </p>
          </div>

          {/* Scheme Image with enhanced styling */}
          <div className="mb-20">
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl blur-2xl opacity-30"></div>
              <img
                src="/SMmiO0Qt.jpg"
                alt="E-Flowのスキーム図"
                className="relative w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Feature Cards - Modern card style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Section - Grid Cards */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ビジネスモデル
            </h2>
            <p className="text-xl text-blue-600 font-medium max-w-3xl mx-auto">
              本部専用ツールと仕組みにより、再現性高く収益化が可能な越境物販
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessModel.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index === 0 && <Zap className="w-9 h-9 text-white" />}
                      {index === 1 && <Shield className="w-9 h-9 text-white" />}
                      {index === 2 && <RotateCw className="w-9 h-9 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10">
                グローバル市場への第一歩を
              </h2>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={handleContactClick}
                  className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg"
                >
                  お問い合わせ
                </button>
                <button
                  onClick={handleDocumentRequestClick}
                  className="bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold cursor-not-allowed border-2 border-white/30 text-lg"
                  disabled
                >
                  資料請求（準備中）
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EFlow;
