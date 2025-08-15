# Supabase Integration Setup Guide

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Choose your organization and project name
3. Set a database password
4. Choose your region

## 2. Get Your Project Credentials

1. Go to your project dashboard
2. Navigate to Settings > API
3. Copy your Project URL and anon/public key

## 3. Set Up Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 4. Create the Database Table

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Run the SQL from `supabase-schema.sql` file

Or copy and paste this SQL:

```sql
-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  marketplace TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads for authenticated users
CREATE POLICY "Allow authenticated reads" ON waitlist
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## 5. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the waitlist section
3. Try submitting the form
4. Check your Supabase dashboard to see the entry

## 6. Features Included

- ✅ Form validation (name, email, marketplace required)
- ✅ Email format validation
- ✅ Duplicate email prevention
- ✅ Loading states and error handling
- ✅ Success confirmation
- ✅ Real-time waitlist count display
- ✅ Responsive design
- ✅ TypeScript support

## 7. Security Features

- Row Level Security (RLS) enabled
- Public insert policy for anonymous users
- Authenticated read policy
- Email uniqueness constraint
- Input validation and sanitization

## 8. Database Schema

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| full_name | TEXT | User's full name |
| email | TEXT | User's email (unique) |
| marketplace | TEXT | Selected marketplace |
| status | TEXT | Entry status (pending/approved/rejected) |
| created_at | TIMESTAMP | Entry creation time |
| updated_at | TIMESTAMP | Last update time |

## 9. API Endpoints Used

The integration uses these Supabase operations:
- `INSERT` - Add new waitlist entries
- `SELECT` - Check for duplicate emails
- `SELECT COUNT` - Get waitlist count

## 10. Troubleshooting

### Common Issues:

1. **Environment variables not loading**
   - Make sure `.env.local` is in the project root
   - Restart your development server

2. **Database connection errors**
   - Verify your Supabase URL and key
   - Check if your project is active

3. **RLS policy errors**
   - Ensure the SQL schema was executed correctly
   - Check the policies in your Supabase dashboard

4. **TypeScript errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check that `@supabase/supabase-js` is in your package.json 