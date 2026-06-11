import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { newsItems } from '../libs/newsData';
import { NewsRow } from './News';

const NewsList: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            NEWS
          </h1>
          <p className="text-xl text-gray-600 font-light">
            お知らせ一覧
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {newsItems.map((item) => (
            <NewsRow key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/#news"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
