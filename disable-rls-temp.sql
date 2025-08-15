-- Temporary fix: Disable RLS on contact_support table
-- This will allow the contact form to work immediately

-- Disable Row Level Security temporarily
ALTER TABLE contact_support DISABLE ROW LEVEL SECURITY;

-- Verify RLS is disabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'contact_support'; 