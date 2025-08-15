# 🔧 Environment Setup Guide

## 🚨 **Critical Issues to Fix**

### 1. **Supabase Configuration**

You need to update your `.env.local` file with actual Supabase credentials:

```bash
# Create or update .env.local in your project root
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
RESEND_API_KEY=re_bjJ8FB62_9oNam8JT3LvWoa4ev4x8sYPt
```

**How to get Supabase credentials:**
1. Go to your Supabase project dashboard
2. Click on "Settings" → "API"
3. Copy the "Project URL" and "anon public" key
4. Replace the placeholder values in `.env.local`

### 2. **Database RLS Issues**

Run this SQL in your Supabase SQL Editor:

```sql
-- Fix RLS Issues
ALTER TABLE waitlist DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_support DISABLE ROW LEVEL SECURITY;

-- Verify the fix
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
```

### 3. **Clear Next.js Cache**

```bash
# Stop the development server
# Then run:
rm -rf .next
npm run dev
```

## ✅ **Step-by-Step Fix Process**

### **Step 1: Update Environment Variables**

1. Open your project in the terminal
2. Create or edit `.env.local`:
   ```bash
   nano .env.local
   ```
3. Add your actual Supabase credentials
4. Save and exit

### **Step 2: Fix Database RLS**

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Run the SQL from `fix-rls-issues.sql`
4. Verify both tables show "RLS DISABLED"

### **Step 3: Restart Development Server**

```bash
# Stop current server (Ctrl+C)
# Clear cache
rm -rf .next
# Restart
npm run dev
```

### **Step 4: Test the Forms**

1. Go to `http://localhost:3000`
2. Test the waitlist form
3. Test the contact support form
4. Check browser console for errors

## 🔍 **Verification Checklist**

- [ ] `.env.local` has real Supabase credentials
- [ ] RLS is disabled on both tables
- [ ] Next.js cache is cleared
- [ ] Development server starts without errors
- [ ] Waitlist form works
- [ ] Contact support form works
- [ ] No "Invalid URL" errors in console

## 🚨 **Common Issues & Solutions**

### **Issue: "Invalid URL" Error**
**Solution:** Update Supabase credentials in `.env.local`

### **Issue: "RLS Policy Violation"**
**Solution:** Run the RLS disable SQL in Supabase

### **Issue: Next.js Config Errors**
**Solution:** Already fixed in `next.config.ts`

### **Issue: Port Already in Use**
**Solution:** 
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

## 📞 **Need Help?**

If you're still having issues:

1. **Check the terminal output** for specific error messages
2. **Verify Supabase credentials** are correct
3. **Ensure RLS is disabled** on both tables
4. **Clear all caches** and restart

The main issue is that your Supabase credentials are still placeholder values. Once you update those, everything should work perfectly! 