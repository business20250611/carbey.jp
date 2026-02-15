/*
  # Fix RLS Policies Security Issues

  ## Overview
  This migration fixes overly permissive RLS policies that allow unrestricted access.
  
  ## Changes
  
  ### 1. Drop existing overly permissive policies
  - Remove all policies with `USING (true)` or `WITH CHECK (true)`
  
  ### 2. Add user_id column to track ownership
  - Add `user_id` column to deployment_settings
  - Add `user_id` column to deployment_logs
  
  ### 3. Create properly restrictive policies
  - Users can only read their own deployment settings
  - Users can only update their own deployment settings
  - Users can only insert deployment settings for themselves
  - Users can read all deployment logs
  - Users can only create deployment logs for themselves
  - Users can only update their own deployment logs
  
  ## Security Improvements
  - Proper user ownership checks using auth.uid()
  - No unrestricted access policies
  - Clear separation between read and write permissions
*/

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can read deployment settings" ON deployment_settings;
DROP POLICY IF EXISTS "Authenticated users can insert deployment settings" ON deployment_settings;
DROP POLICY IF EXISTS "Authenticated users can update deployment settings" ON deployment_settings;
DROP POLICY IF EXISTS "Anyone can read deployment logs" ON deployment_logs;
DROP POLICY IF EXISTS "Authenticated users can create deployment logs" ON deployment_logs;
DROP POLICY IF EXISTS "Authenticated users can update deployment logs" ON deployment_logs;

-- Add user_id columns if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'deployment_settings' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE deployment_settings ADD COLUMN user_id uuid REFERENCES auth.users(id);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'deployment_logs' AND column_name = 'user_id'
  ) THEN
    ALTER TABLE deployment_logs ADD COLUMN user_id uuid REFERENCES auth.users(id);
  END IF;
END $$;

-- Create properly restrictive policies for deployment_settings
CREATE POLICY "Users can read own deployment settings"
  ON deployment_settings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own deployment settings"
  ON deployment_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own deployment settings"
  ON deployment_settings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own deployment settings"
  ON deployment_settings
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create properly restrictive policies for deployment_logs
CREATE POLICY "Users can read all deployment logs"
  ON deployment_logs
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create own deployment logs"
  ON deployment_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own deployment logs"
  ON deployment_logs
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_deployment_settings_user_id ON deployment_settings(user_id);
CREATE INDEX IF NOT EXISTS idx_deployment_logs_user_id ON deployment_logs(user_id);