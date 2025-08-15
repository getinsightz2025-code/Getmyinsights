-- Fix RLS Policies for both waitlist and contact_support tables
-- Run this in your Supabase SQL Editor

-- Disable RLS on waitlist table
ALTER TABLE waitlist DISABLE ROW LEVEL SECURITY;

-- Disable RLS on contact_support table  
ALTER TABLE contact_support DISABLE ROW LEVEL SECURITY;

-- Verify RLS is disabled for both tables
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename IN ('waitlist', 'contact_support'); 