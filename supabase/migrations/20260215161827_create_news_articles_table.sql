/*
  # Create News Articles Table with Draft/Published Status

  ## Overview
  This migration creates a news articles management system with draft and published status control.
  Admins can create/edit articles as drafts and only publish them when ready.

  ## New Tables
  - `news_articles`
    - `id` (uuid, primary key) - Unique identifier for each article
    - `title` (text, required) - Article title
    - `category` (text, required) - Article category (e.g., 'お知らせ', 'プレスリリース', '事業')
    - `content` (text, nullable) - Full article content/description
    - `date` (text, required) - Display date (format: YYYY.MM.DD)
    - `status` (text, required, default: 'draft') - Article status: 'draft' or 'published'
    - `is_new` (boolean, default: false) - Show NEW badge
    - `created_at` (timestamptz) - Creation timestamp
    - `updated_at` (timestamptz) - Last update timestamp
    - `published_at` (timestamptz, nullable) - Publication timestamp

  ## Security
  - Enable RLS on `news_articles` table
  - Public read access for published articles only
  - Authenticated users can manage all articles (for admin access)

  ## Important Notes
  1. Articles default to 'draft' status when created
  2. Only 'published' articles are visible to public
  3. Admins can see and edit both draft and published articles
  4. The `published_at` timestamp is set when status changes to 'published'
*/

-- Create news_articles table
CREATE TABLE IF NOT EXISTS news_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  content text,
  date text NOT NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  is_new boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published_at timestamptz,
  CONSTRAINT valid_date_format CHECK (date ~ '^\d{4}\.\d{2}\.\d{2}$')
);

-- Enable RLS
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

-- Public can view only published articles
CREATE POLICY "Public can view published articles"
  ON news_articles FOR SELECT
  TO anon
  USING (status = 'published');

-- Authenticated users can view all articles (for admin)
CREATE POLICY "Authenticated users can view all articles"
  ON news_articles FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can insert articles
CREATE POLICY "Authenticated users can insert articles"
  ON news_articles FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated users can update articles
CREATE POLICY "Authenticated users can update articles"
  ON news_articles FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated users can delete articles
CREATE POLICY "Authenticated users can delete articles"
  ON news_articles FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_news_status ON news_articles(status);
CREATE INDEX IF NOT EXISTS idx_news_published_at ON news_articles(published_at DESC);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_news_articles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  
  -- Set published_at when status changes to 'published'
  IF NEW.status = 'published' AND OLD.status != 'published' THEN
    NEW.published_at = now();
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_news_articles_timestamp ON news_articles;
CREATE TRIGGER update_news_articles_timestamp
  BEFORE UPDATE ON news_articles
  FOR EACH ROW
  EXECUTE FUNCTION update_news_articles_updated_at();

-- Insert existing news items as published articles
INSERT INTO news_articles (title, category, date, status, is_new, published_at) VALUES
  ('サポート体制強化のお知らせ', 'お知らせ', '2026.01.20', 'published', true, now()),
  ('サービス提供開始のお知らせ', 'プレスリリース', '2025.09.01', 'published', false, '2025-09-01'::timestamptz),
  ('公式ドメイン取得・コーポレートサイト準備開始', 'お知らせ', '2025.07.15', 'published', false, '2025-07-15'::timestamptz),
  ('カーベイ株式会社 設立のお知らせ', 'お知らせ', '2025.06.01', 'published', false, '2025-06-01'::timestamptz)
ON CONFLICT DO NOTHING;