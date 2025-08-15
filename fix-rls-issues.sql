-- Fix RLS Issues for GetInsightZ Database
-- Run this in your Supabase SQL Editor

-- 1. Disable RLS on both tables
ALTER TABLE waitlist DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_support DISABLE ROW LEVEL SECURITY;

-- 2. Verify RLS is disabled
SELECT 
    schemaname, 
    tablename, 
    rowsecurity,
    CASE 
        WHEN rowsecurity THEN 'RLS ENABLED' 
        ELSE 'RLS DISABLED' 
    END as status
FROM pg_tables 
WHERE tablename IN ('waitlist', 'contact_support');

-- 3. Test insert permissions (optional - run after fixing)
-- INSERT INTO waitlist (full_name, email, marketplace, status) 
-- VALUES ('Test User', 'test@example.com', 'amazon', 'pending');

-- INSERT INTO contact_support (name, email, subject, message, category, priority, status) 
-- VALUES ('Test User', 'test@example.com', 'Test Subject', 'Test Message', 'general', 'medium', 'open');

-- 4. Check table structure
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name IN ('waitlist', 'contact_support')
ORDER BY table_name, ordinal_position; 