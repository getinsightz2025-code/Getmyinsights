# Resend Email Integration Setup Guide

## 1. Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address
3. Complete your account setup

## 2. Get Your API Key

1. Go to your Resend dashboard
2. Navigate to **API Keys** section
3. Create a new API key
4. Copy the API key (starts with `re_`)

## 3. Set Up Environment Variables

Add your Resend API key to your `.env.local` file:

```env
# Existing Supabase variables
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Add Resend API key
RESEND_API_KEY=re_your_resend_api_key_here
```

## 4. Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain:

1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., `getinsightz.com`)
3. Follow the DNS verification steps
4. Update the `from` email in `src/lib/email.ts` to use your verified domain

## 5. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the waitlist section
3. Submit a test entry
4. Check your email for the welcome message
5. Check Resend dashboard for delivery status

## 6. Email Templates Included

### Welcome Email
- **Trigger**: When user joins waitlist
- **Content**: Welcome message, user details, next steps
- **Design**: Professional gradient header, clean layout

### Approval Email
- **Trigger**: When status changes to "approved"
- **Content**: Congratulations, platform access, call-to-action
- **Design**: Green success theme, launch button

### Rejection Email
- **Trigger**: When status changes to "rejected"
- **Content**: Polite rejection, reason (optional), future opportunities
- **Design**: Neutral gray theme, professional tone

## 7. Email Features

- ✅ **HTML Templates** with responsive design
- ✅ **Personalized content** (name, email, marketplace)
- ✅ **Professional styling** with gradients and icons
- ✅ **Error handling** - emails don't break the main flow
- ✅ **Delivery tracking** via Resend dashboard
- ✅ **Spam protection** with proper headers

## 8. Customization Options

### Update Email Templates
Edit the HTML in `src/lib/email.ts`:
- Change colors and styling
- Update content and messaging
- Add your logo or branding
- Modify call-to-action buttons

### Add New Email Types
1. Add new function to `emailService`
2. Update `waitlistService.updateStatus()` to call it
3. Test the new email flow

### Update Sender Information
In `src/lib/email.ts`, update:
- `from` email address
- Subject lines
- Company branding

## 9. Production Considerations

### Domain Verification
- Verify your domain in Resend
- Update `from` emails to use your domain
- Set up proper SPF/DKIM records

### Rate Limits
- Resend has generous limits (3,000 emails/day on free plan)
- Monitor usage in dashboard
- Upgrade plan if needed

### Email Analytics
- Track open rates, click rates in Resend dashboard
- Monitor bounce rates and spam complaints
- Use data to improve email content

## 10. Troubleshooting

### Common Issues:

1. **Emails not sending**
   - Check RESEND_API_KEY in environment
   - Verify API key is valid
   - Check Resend dashboard for errors

2. **Emails going to spam**
   - Verify your domain
   - Use consistent sender addresses
   - Avoid spam trigger words

3. **Template rendering issues**
   - Test HTML in email client
   - Check for broken links
   - Verify responsive design

4. **API errors**
   - Check browser console for errors
   - Verify API route is working
   - Check server logs

## 11. Security Best Practices

- ✅ **API key in environment variables** (not in code)
- ✅ **Server-side email sending** (not client-side)
- ✅ **Input validation** before sending emails
- ✅ **Error handling** to prevent data leaks
- ✅ **Rate limiting** to prevent abuse

## 12. Monitoring & Analytics

### Resend Dashboard
- Delivery rates
- Open rates
- Click rates
- Bounce rates
- Spam complaints

### Custom Tracking
- Track email events in your database
- Monitor user engagement
- A/B test email content
- Optimize send times 