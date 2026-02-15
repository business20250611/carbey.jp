import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Eye, EyeOff, Save, X } from 'lucide-react';
import { supabase, NewsArticle } from '../libs/supabase';
import { toast } from 'react-toastify';

const NewsAdmin: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'お知らせ',
    content: '',
    date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
    is_new: false,
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
      toast.error('記事の取得に失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveDraft = async () => {
    try {
      const articleData = {
        ...formData,
        status: 'draft' as const,
      };

      if (editingArticle) {
        const { error } = await supabase
          .from('news_articles')
          .update(articleData)
          .eq('id', editingArticle.id);

        if (error) throw error;
        toast.success('下書きを保存しました');
      } else {
        const { error } = await supabase
          .from('news_articles')
          .insert([articleData]);

        if (error) throw error;
        toast.success('下書きを作成しました');
      }

      resetForm();
      fetchArticles();
    } catch (error) {
      console.error('Error saving draft:', error);
      toast.error('保存に失敗しました');
    }
  };

  const handlePublish = async (articleId?: string) => {
    try {
      const id = articleId || editingArticle?.id;
      if (!id && !isCreating) return;

      if (!id) {
        const articleData = {
          ...formData,
          status: 'published' as const,
        };

        const { error } = await supabase
          .from('news_articles')
          .insert([articleData]);

        if (error) throw error;
        toast.success('記事を公開しました');
      } else {
        const updateData = id === editingArticle?.id ? formData : {};
        const { error } = await supabase
          .from('news_articles')
          .update({ ...updateData, status: 'published' })
          .eq('id', id);

        if (error) throw error;
        toast.success('記事を公開しました');
      }

      resetForm();
      fetchArticles();
    } catch (error) {
      console.error('Error publishing article:', error);
      toast.error('公開に失敗しました');
    }
  };

  const handleUnpublish = async (articleId: string) => {
    try {
      const { error } = await supabase
        .from('news_articles')
        .update({ status: 'draft' })
        .eq('id', articleId);

      if (error) throw error;
      toast.success('記事を非公開にしました');
      fetchArticles();
    } catch (error) {
      console.error('Error unpublishing article:', error);
      toast.error('非公開化に失敗しました');
    }
  };

  const handleDelete = async (articleId: string) => {
    if (!confirm('この記事を削除しますか？')) return;

    try {
      const { error } = await supabase
        .from('news_articles')
        .delete()
        .eq('id', articleId);

      if (error) throw error;
      toast.success('記事を削除しました');
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
      toast.error('削除に失敗しました');
    }
  };

  const handleEdit = (article: NewsArticle) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      category: article.category,
      content: article.content || '',
      date: article.date,
      is_new: article.is_new,
    });
    setIsCreating(false);
  };

  const resetForm = () => {
    setEditingArticle(null);
    setIsCreating(false);
    setFormData({
      title: '',
      category: 'お知らせ',
      content: '',
      date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
      is_new: false,
    });
  };

  const getStatusBadge = (status: string) => {
    return status === 'published' ? (
      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium flex items-center gap-1">
        <Eye className="w-3 h-3" />
        公開中
      </span>
    ) : (
      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium flex items-center gap-1">
        <EyeOff className="w-3 h-3" />
        下書き
      </span>
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 text-white">
          <h2 className="text-3xl font-bold">ニュース記事管理</h2>
          <p className="text-gray-200 mt-2">記事の作成・編集・公開を管理</p>
        </div>

        <div className="p-6">
          {(isCreating || editingArticle) && (
            <div className="bg-gray-50 rounded-xl p-6 mb-6 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {editingArticle ? '記事を編集' : '新規記事作成'}
                </h3>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    タイトル
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="記事タイトルを入力"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      カテゴリー
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="お知らせ">お知らせ</option>
                      <option value="プレスリリース">プレスリリース</option>
                      <option value="事業">事業</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      日付 (YYYY.MM.DD)
                    </label>
                    <input
                      type="text"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="2026.01.20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    記事内容（任意）
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="記事の詳細内容を入力"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="is_new"
                    checked={formData.is_new}
                    onChange={(e) => setFormData({ ...formData, is_new: e.target.checked })}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="is_new" className="text-sm font-medium text-gray-700">
                    NEWバッジを表示
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSaveDraft}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <Save className="w-5 h-5" />
                    下書き保存
                  </button>
                  <button
                    onClick={() => handlePublish()}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                    公開する
                  </button>
                </div>
              </div>
            </div>
          )}

          {!isCreating && !editingArticle && (
            <button
              onClick={() => setIsCreating(true)}
              className="mb-6 flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <Plus className="w-5 h-5" />
              新規記事作成
            </button>
          )}

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">読み込み中...</p>
            </div>
          ) : (
            <div className="space-y-3">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getStatusBadge(article.status)}
                        <span className="text-sm text-gray-500">{article.date}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {article.category}
                        </span>
                        {article.is_new && (
                          <span className="px-2 py-1 bg-red-600 text-white rounded text-xs">
                            NEW
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
                      {article.content && (
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{article.content}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(article)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="編集"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>

                      {article.status === 'draft' ? (
                        <button
                          onClick={() => handlePublish(article.id)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="公開"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUnpublish(article.id)}
                          className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                          title="非公開"
                        >
                          <EyeOff className="w-5 h-5" />
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(article.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="削除"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {articles.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <p className="text-gray-500 text-lg">記事がまだありません</p>
                  <p className="text-gray-400 mt-2">新規記事を作成してください</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsAdmin;
