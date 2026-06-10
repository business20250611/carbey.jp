import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';

interface NewsArticle {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string;
}

const newsArticles: Record<string, NewsArticle> = {
  'economy-plan-launch-2026': {
    id: 'economy-plan-launch-2026',
    date: '2026.06.02',
    category: 'お知らせ',
    title: 'Carbey自動売買システム「エコノミープラン」ローンチのお知らせ',
    content: `このたび、Carbey自動売買システムでは、より低コストで中古車ビジネスに参入できる「エコノミープラン」を新たにローンチいたしました。

「誰でも車屋になれる」というCarbeyの理念のもと、開業時のハードルを下げ、未経験の方でも始めやすいプランとして提供いたします。

今後もCarbeyは、中古車ビジネスをより身近に、より挑戦しやすい選択肢として広げてまいります。`
  },
  'support-enhancement-2026': {
    id: 'support-enhancement-2026',
    date: '2026.01.20',
    category: 'お知らせ',
    title: 'サポート体制強化のお知らせ',
    content: `平素よりカーベイをご利用いただき、誠にありがとうございます。

この度、加盟者様の運用支援体制をさらに強化するため、
サポート体制の拡充を実施いたしました。

これにより、これまで以上にスムーズな運用支援および
迅速な対応が可能となります。

カーベイでは、未経験の方でも安心して事業を開始・継続できるよう、
今後もサービス品質の向上に努めてまいります。

引き続き、カーベイをよろしくお願いいたします。`
  },
  'service-launch': {
    id: 'service-launch',
    date: '2025.09.01',
    category: 'プレスリリース',
    title: 'サービス提供開始のお知らせ',
    content: 'カーベイのサービス提供を開始いたしました。'
  },
  'domain-acquisition': {
    id: 'domain-acquisition',
    date: '2025.07.15',
    category: 'お知らせ',
    title: '公式ドメイン取得・コーポレートサイト準備開始',
    content: '公式ドメインを取得し、コーポレートサイトの準備を開始いたしました。'
  },
  'company-establishment': {
    id: 'company-establishment',
    date: '2025.06.01',
    category: 'お知らせ',
    title: 'カーベイ株式会社 設立のお知らせ',
    content: 'カーベイ株式会社を設立いたしました。'
  }
};

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? newsArticles[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">記事が見つかりません</h1>
          <Link to="/" className="text-gray-600 hover:text-gray-900 inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            トップページに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          to="/#news"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          お知らせ一覧に戻る
        </Link>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                article.category === 'プレスリリース'
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {article.category}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            <div className="flex items-center text-gray-500 text-sm lg:text-base mb-10 pb-8 border-b border-gray-200">
              <Calendar className="h-5 w-5 mr-2" />
              {article.date}
            </div>

            <div className="prose prose-lg max-w-none">
              {article.content.split('\n').map((line, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-12 text-center">
          <Link
            to="/#news"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            お知らせ一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
