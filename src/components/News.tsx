import React, { useState, useEffect } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase, NewsArticle } from '../libs/supabase';

const News: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPublishedArticles();
  }, []);

  const fetchPublishedArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .eq('status', 'published')
        .order('date', { ascending: false });

      if (error) throw error;
      setNewsItems(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
              <p className="mt-4 text-gray-600">読み込み中...</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {newsItems.length === 0 ? (
                <div className="p-12 text-center text-gray-500">
                  <p>記事がまだありません</p>
                </div>
              ) : (
                newsItems.map((item) => (
                  <Link
                    key={item.id}
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
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.category === 'プレスリリース'
                                ? 'bg-gray-100 text-gray-800'
                                : item.category === '事業'
                                ? 'bg-gray-100 text-gray-800'
                                : 'bg-gray-100 text-gray-700'
                            }`}>
                              {item.category}
                            </span>
                            {item.is_new && (
                              <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                                NEW
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg lg:text-xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                            {item.title}
                          </h3>
                        </div>
                        <div className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                          <ChevronRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;