-- Create contact_support table
CREATE TABLE IF NOT EXISTS contact_support (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  category TEXT DEFAULT 'general' CHECK (category IN ('general', 'technical', 'billing', 'feature_request', 'bug_report')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for contact_support table
CREATE INDEX IF NOT EXISTS idx_contact_support_email ON contact_support(email);
CREATE INDEX IF NOT EXISTS idx_contact_support_status ON contact_support(status);
CREATE INDEX IF NOT EXISTS idx_contact_support_priority ON contact_support(priority);
CREATE INDEX IF NOT EXISTS idx_contact_support_created_at ON contact_support(created_at DESC);

-- Enable Row Level Security for contact_support
ALTER TABLE contact_support ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts
CREATE POLICY "Allow public inserts" ON contact_support
  FOR INSERT WITH CHECK (true);

-- Create policy to allow authenticated reads (for admin)
CREATE POLICY "Allow authenticated reads" ON contact_support
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create trigger to automatically update updated_at for contact_support
CREATE TRIGGER update_contact_support_updated_at
  BEFORE UPDATE ON contact_support
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column(); 