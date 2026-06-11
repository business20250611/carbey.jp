import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsItems, NewsItem } from '../libs/newsData';

const PREVIEW_COUNT = 3;

export const NewsRow: React.FC<{ item: NewsItem }> = ({ item }) => (
  <Link
    to={`/news/${item.id}`}
    className="block border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
  >
    <div className="p-6 lg:p-8">
      <div className="flex items-start space-x-4">
        <div className="flex items-center text-gray-500 text-sm lg:text-base min-w-[100px]">
          <Calendar className="h-4 w-4 mr-2" />
          {item.date}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              {item.category}
            </span>
            {item.isNew && (
              <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                NEW
              </span>
            )}
          </div>
          <h3 className="text-lg lg:text-xl font-medium text-gray-900 transition-colors duration-200">
            {item.title}
          </h3>
        </div>
        <div className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
          <ChevronRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  </Link>
);

const News: React.FC = () => {
  const preview = newsItems.slice(0, PREVIEW_COUNT);
  const hasMore = newsItems.length > PREVIEW_COUNT;

  return (
    <section id="news" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            NEWS
          </h2>
          <p className="text-xl text-gray-600 font-light">
            お知らせ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {preview.map((item) => (
              <NewsRow key={item.id} item={item} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 text-center">
              <Link
                to="/news"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm font-medium tracking-wide"
              >
                もっと見る
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
