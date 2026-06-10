import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { newsItems } from '../libs/newsData';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsItems.find((n) => n.id === id) ?? null;

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
          お知らせに戻る
        </Link>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
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
            お知らせに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
