import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, TrendingUp, Globe, ShoppingCart } from 'lucide-react';

const EFlow: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <ShoppingCart className="w-16 h-16 text-white" />,
      title: '商品選定',
      description: '国内サイトで魅力的な商品を選定し、グローバル市場への展開を準備します'
    },
    {
      icon: <Globe className="w-16 h-16 text-white" />,
      title: '海外サイト出品',
      description: '専用ツールを使用して海外ECサイトへ効率的に商品を出品します'
    },
    {
      icon: <Package className="w-16 h-16 text-white" />,
      title: '発送代行',
      description: '商品が売れたら梱包・発送を代行し、スムーズなお届けを実現します'
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-white" />,
      title: '売上の入金',
      description: '売上を受け取り、継続的にビジネスサイクルを回していきます'
    }
  ];

  const businessModel = [
    {
      title: 'グローバル展開支援',
      description: '日本製品の海外販売をトータルサポート。言語の壁や物流の複雑さを解消し、スムーズな越境ECを実現します。'
    },
    {
      title: '在庫リスクの最小化',
      description: '効率的な在庫管理システムにより、過剰在庫や欠品のリスクを最小限に抑えます。'
    },
    {
      title: 'データドリブン戦略',
      description: '市場データを活用し、需要予測や価格戦略を最適化。収益性の高い商品展開をサポートします。'
    },
    {
      title: 'ワンストップソリューション',
      description: '商品選定から出品、発送、カスタマーサポートまで、すべてのプロセスを一元管理します。'
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
      {/* Hero Section */}
      <section
        className="py-20 lg:py-32 text-white relative"
        style={{
          backgroundImage: 'url("/img4.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="/eflow_transparent.png"
              alt="E-Flow Logo"
              className="h-24 lg:h-32 mx-auto"
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            E-FLOW
          </h1>
          <p className="text-xl text-white">
            グローバル越境ECプラットフォーム
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              日本の優れた商品を世界へ
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              E-Flowは越境ECビジネスをトータルでサポートし、グローバル市場での成功を実現します。<br />
              商品選定から出品、発送まで、すべてをワンストップで提供するプラットフォームです。
            </p>
          </div>
        </div>
      </section>

      {/* Business Flow Section */}
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              E-Flowの流れ
            </h2>
            <p className="text-xl font-semibold text-red-600 mb-8">
              シンプルで効率的な4つのステップ
            </p>
          </div>

          {/* Scheme Image */}
          <div className="mb-16">
            <img
              src="/E-Flowスキーム図.jpg"
              alt="E-Flowのスキーム図"
              className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Feature Cards with diamond icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-48 h-48 bg-slate-700 border-2 border-slate-600 transform rotate-45 flex items-center justify-center shadow-lg">
                    <div className="transform -rotate-45 flex flex-col items-center justify-center">
                      {feature.icon}
                      <div className="w-8 h-1 bg-gray-300 rounded mt-2"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Section - Alternating Layout */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              ビジネスモデル
            </h2>
            <p className="text-xl font-semibold text-red-600">
              革新的なテクノロジーと実績あるノウハウで越境ECビジネスをサポート
            </p>
          </div>

          <div className="space-y-16 mt-16">
            {businessModel.map((item, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="space-y-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className={`w-48 h-48 ${
                        index === 0 ? 'bg-slate-700 border-slate-600' :
                        index === 2 ? 'bg-gray-700 border-gray-600' : 'bg-gray-800 border-gray-700'
                      } border-2 transform rotate-45 flex items-center justify-center shadow-lg`}>
                        <div className="transform -rotate-45 flex flex-col items-center justify-center">
                          <Globe className="w-16 h-16 text-white" />
                          <div className="w-8 h-1 bg-gray-300 rounded mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center lg:order-1">
                      <div className={`w-48 h-48 ${
                        index === 1 ? 'bg-gray-600 border-gray-500' : 'bg-slate-600 border-slate-500'
                      } border-2 transform rotate-45 flex items-center justify-center shadow-lg`}>
                        <div className="transform -rotate-45 flex flex-col items-center justify-center">
                          <Package className="w-16 h-16 text-white" />
                          <div className="w-8 h-1 bg-gray-300 rounded mt-2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6 lg:order-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              E-Flowの強み
            </h2>
            <p className="text-xl font-semibold text-red-600">
              なぜE-Flowが選ばれるのか
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">豊富な実績</h3>
              <p className="text-gray-700 leading-relaxed">
                多数の企業様の越境EC進出をサポートし、確かな実績を積み重ねてきました。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">専門知識</h3>
              <p className="text-gray-700 leading-relaxed">
                グローバル市場の動向や各国の商習慣を熟知した専門チームがサポートします。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">最新テクノロジー</h3>
              <p className="text-gray-700 leading-relaxed">
                AIやデータ分析を活用した最先端のツールで、効率的なビジネス展開を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xl text-gray-700 mb-12">
            E-Flowで越境ECビジネスを始めませんか？
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <button
              onClick={handleContactClick}
              className="bg-slate-700 text-white px-8 py-6 rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              お問い合わせ
            </button>
            <button
              onClick={handleDocumentRequestClick}
              className="bg-gray-300 text-gray-600 px-8 py-6 rounded-lg font-medium cursor-not-allowed shadow-lg"
              disabled
            >
              資料請求（準備中）
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EFlow;
