import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, TrendingUp, Globe, ShoppingCart } from 'lucide-react';

const EFlow: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <ShoppingCart className="h-12 w-12 text-blue-600" />,
      title: '商品選定',
      description: '国内サイトで魅力的な商品を選定し、グローバル市場への展開を準備します'
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: '海外サイト出品',
      description: '専用ツールを使用して海外ECサイトへ効率的に商品を出品します'
    },
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: '発送代行',
      description: '商品が売れたら梱包・発送を代行し、スムーズなお届けを実現します'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
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
    // E-Flow専用の資料請求は準備中
    alert('E-Flowの資料請求は現在準備中です。もうしばらくお待ちください。');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <img
              src="/E-Flowロゴ.png"
              alt="E-Flow Logo"
              className="h-32 mx-auto mb-8"
            />
            <h1 className="text-5xl font-bold mb-6">
              E-Flow
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              グローバル越境ECプラットフォーム
            </p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mt-4 leading-relaxed">
              日本の優れた商品を世界へ。E-Flowは越境ECビジネスをトータルでサポートし、
              グローバル市場での成功を実現します。
            </p>
          </div>
        </div>
      </section>

      {/* Business Flow Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-Flowの流れ</h2>
            <p className="text-xl text-gray-600">
              シンプルで効率的な4つのステップ
            </p>
          </div>

          {/* Scheme Image */}
          <div className="mb-16">
            <img
              src="/E-Flowスキーム図.jpg"
              alt="E-Flowのスキーム図"
              className="w-full max-w-5xl mx-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ビジネスモデル</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              E-Flowは、革新的なテクノロジーと実績あるノウハウで、
              越境ECビジネスの成功をサポートします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessModel.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">E-Flowの強み</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              なぜE-Flowが選ばれるのか
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">豊富な実績</h3>
              <p className="text-blue-100 leading-relaxed">
                多数の企業様の越境EC進出をサポートし、確かな実績を積み重ねてきました。
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">専門知識</h3>
              <p className="text-blue-100 leading-relaxed">
                グローバル市場の動向や各国の商習慣を熟知した専門チームがサポートします。
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">最新テクノロジー</h3>
              <p className="text-blue-100 leading-relaxed">
                AIやデータ分析を活用した最先端のツールで、効率的なビジネス展開を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            グローバル市場への第一歩を
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            E-Flowで越境ECビジネスを始めませんか？
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleContactClick}
              className="bg-blue-600 text-white px-12 py-5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg"
            >
              お問い合わせ
            </button>
            <button
              onClick={handleDocumentRequestClick}
              className="bg-gray-400 text-white px-12 py-5 rounded-lg font-semibold cursor-not-allowed shadow-lg text-lg relative"
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
