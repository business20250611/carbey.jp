import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  content: string | null;
  date: string;
  status: 'draft' | 'published';
  is_new: boolean;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}
