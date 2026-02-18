import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, TrendingUp, Globe, ShoppingCart, CheckCircle2, BarChart3, Shield, Clock } from 'lucide-react';

const EFlow: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <ShoppingCart className="w-16 h-16 text-white" />,
      title: '商品選定',
      description: '売れる商品をデータで特定。リサーチから仕入れまで完全サポート'
    },
    {
      icon: <Globe className="w-16 h-16 text-white" />,
      title: '海外サイト出品',
      description: '複雑な海外ECサイトへの出品作業を代行。言語の壁も解消'
    },
    {
      icon: <Package className="w-16 h-16 text-white" />,
      title: '発送代行',
      description: '梱包・配送・カスタマー対応まで全てお任せ。手間ゼロで販売'
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-white" />,
      title: '売上の入金',
      description: '安定した入金サイクルで、継続的な収益を実現'
    }
  ];

  const strengths = [
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: '実績豊富なプラットフォーム',
      description: '数百社の越境EC成功事例。平均売上成長率200%超を実現'
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: 'グローバル市場の専門知識',
      description: '10カ国以上の市場データと現地商習慣を熟知した専門チームが支援'
    },
    {
      icon: <Package className="w-8 h-8 text-white" />,
      title: '最先端のAI技術',
      description: 'AIによる需要予測と価格最適化で、売上を最大化'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: '完全リスク管理',
      description: '在庫リスク最小化と為替リスクヘッジで安心運営'
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: '24時間サポート体制',
      description: '専任担当者による手厚いサポート。迅速な問題解決'
    }
  ];

  const comparison = [
    { category: '初期費用', traditional: '数百万円〜', eflow: '0円' },
    { category: '在庫リスク', traditional: '全て自社負担', eflow: '最小限' },
    { category: '言語対応', traditional: '自社で手配', eflow: '全て代行' },
    { category: '物流管理', traditional: '自社構築必要', eflow: '完全委託可能' },
    { category: 'サポート', traditional: '限定的', eflow: '24時間対応' }
  ];

  const results = [
    { number: '300+', label: '支援企業数' },
    { number: '15カ国', label: '展開国数' },
    { number: '98%', label: '顧客満足度' },
    { number: '200%', label: '平均売上成長率' }
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
      {/* ① ファーストビュー改善（理解） */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/img4.webp")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-slate-800/80 to-gray-900/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-white">
              <img
                src="/eflow_transparent.png"
                alt="E-Flow Logo"
                className="h-20 lg:h-24 mb-8"
              />
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                海外販売の<br />すべてを、<br className="lg:hidden" />お任せください
              </h1>
              <p className="text-2xl mb-6 text-blue-100 font-medium">
                初期費用0円で始める越境ECビジネス
              </p>
              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                商品選定から出品、発送、入金まで。<br />
                越境ECの複雑な業務を全てワンストップで代行。<br />
                あなたは売上を受け取るだけです。
              </p>
              <button
                onClick={handleContactClick}
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-2xl text-lg inline-flex items-center gap-2"
              >
                無料相談を申し込む
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-white text-xl font-bold mb-6">こんな悩み、ありませんか？</h3>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span>海外販売を始めたいが、何から手をつけていいかわからない</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span>言語や物流の壁が高くて諦めていた</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span>初期投資や在庫リスクが心配</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span>国内市場だけでは売上が頭打ち</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-blue-200 font-medium text-center">
                    ↓ E-Flowなら全て解決します ↓
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ② 共感＋解決提示（興味） */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              E-Flowが選ばれる理由
            </h2>
            <p className="text-xl text-blue-600 font-medium">
              越境ECのプロフェッショナルが、あなたのビジネスを成功に導きます
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl font-bold">0円</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">初期費用ゼロ</h3>
              <p className="text-gray-600">システム構築や在庫投資不要。リスクなく始められます</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">全てお任せ</h3>
              <p className="text-gray-600">商品選定から配送まで完全代行。本業に集中できます</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">確実な成果</h3>
              <p className="text-gray-600">平均売上成長率200%の実績。データで証明された成功法</p>
            </div>
          </div>
        </div>
      </section>

      {/* ③ 仕組み説明（納得） */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              たった4ステップで完結
            </h2>
            <p className="text-xl text-blue-600 font-medium">
              複雑な越境ECを、シンプルなプロセスに
            </p>
          </div>

          {/* Scheme Image */}
          <div className="mb-20">
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl blur-2xl opacity-30"></div>
              <img
                src="/E-Flowスキーム図.jpg"
                alt="E-Flowのスキーム図"
                className="relative w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 text-white">
                      {feature.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg inline-flex items-center gap-2"
            >
              詳しい流れを相談する
              <TrendingUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ④ 他社比較（納得） */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              従来の方法と、ここが違う
            </h2>
            <p className="text-xl text-blue-600 font-medium">
              コスト・リスク・手間を大幅削減
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                  <th className="px-6 py-4 text-left text-gray-900 font-bold text-lg">比較項目</th>
                  <th className="px-6 py-4 text-center text-gray-600 font-bold text-lg">従来の方法</th>
                  <th className="px-6 py-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg">E-Flow</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.category}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{item.traditional}</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">{item.eflow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
            <p className="text-xl font-bold text-gray-900 mb-2">
              初期投資を抑えて、最短でグローバル市場へ
            </p>
            <p className="text-gray-600">
              E-Flowなら、リスクを最小限に越境ECをスタートできます
            </p>
          </div>
        </div>
      </section>

      {/* ⑤ 強み・実績（信頼） */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              数字で見るE-Flowの実績
            </h2>
            <p className="text-xl text-blue-300 font-medium">
              確かなデータに裏打ちされた成功実績
            </p>
          </div>

          {/* 数字での実績 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  {item.number}
                </div>
                <div className="text-blue-300 font-medium text-lg">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* 強み5つ */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑥ 最終CTA（行動） */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                まずは無料相談から始めませんか？
              </h2>
              <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
                あなたのビジネスに最適な越境EC戦略を、<br />
                専門コンサルタントが無料でご提案します
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-3xl mx-auto border border-white/20">
                <div className="grid md:grid-cols-3 gap-6 text-white">
                  <div>
                    <div className="text-3xl font-bold mb-2">30分</div>
                    <div className="text-blue-100 text-sm">無料オンライン相談</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">0円</div>
                    <div className="text-blue-100 text-sm">初期費用・相談料</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">即日</div>
                    <div className="text-blue-100 text-sm">最短対応可能</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <button
                  onClick={handleContactClick}
                  className="bg-white text-blue-600 px-12 py-6 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-2xl text-lg inline-flex items-center justify-center gap-3"
                >
                  <span>今すぐ無料相談を申し込む</span>
                  <TrendingUp className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>強引な営業は一切ありません</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>秘密保持契約（NDA）対応可能</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <button
                  onClick={handleDocumentRequestClick}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition-all duration-200 border border-white/30 text-base inline-flex items-center gap-2"
                >
                  サービス資料をダウンロード（準備中）
                  <Package className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 追加の信頼要素 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">安心のサポート体制</h3>
              <p className="text-gray-600 text-sm">専任担当者が成功まで伴走</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <BarChart3 className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">データに基づく戦略</h3>
              <p className="text-gray-600 text-sm">市場分析で最適な展開を実現</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">最短2週間でスタート</h3>
              <p className="text-gray-600 text-sm">スピーディーな立ち上げ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EFlow;
