-- Fix RLS Policies for contact_support table
-- Run this in your Supabase SQL Editor

-- First, drop any existing policies that might be conflicting
DROP POLICY IF EXISTS "Allow public inserts" ON contact_support;
DROP POLICY IF EXISTS "Allow authenticated reads" ON contact_support;
DROP POLICY IF EXISTS "Allow authenticated updates" ON contact_support;

-- Enable Row Level Security (if not already enabled)
ALTER TABLE contact_support ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (this is what we need for the contact form)
CREATE POLICY "Allow public inserts" ON contact_support
  FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated reads (for admin access)
CREATE POLICY "Allow authenticated reads" ON contact_support
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated updates (for admin to update status)
CREATE POLICY "Allow authenticated updates" ON contact_support
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Verify the policies were created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'contact_support'; 