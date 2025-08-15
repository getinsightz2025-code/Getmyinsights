import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const emailService = {
  // Send welcome email when user joins waitlist
  async sendWelcomeEmail(email: string, fullName: string, marketplace: string) {
    try {
      const { data, error } = await resend.emails.send({
        from: 'GetInsightZ <noreply@getinsightz.com>',
        to: [email],
        subject: 'Welcome to GetInsightZ Early Access! 🚀',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to GetInsightZ</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
              .highlight { background: #fff3cd; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc107; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 Welcome to GetInsightZ!</h1>
                <p>You're now part of our exclusive early access community</p>
              </div>
              <div class="content">
                <h2>Hi ${fullName},</h2>
                <p>Thank you for joining the GetInsightZ early access waitlist! We're excited to have you on board.</p>
                
                <div class="highlight">
                  <strong>Your Details:</strong><br>
                  📧 Email: ${email}<br>
                  🛒 Marketplace: ${marketplace}
                </div>
                
                <h3>What's Next?</h3>
                <ul>
                  <li><strong>Priority Access:</strong> You'll be among the first to try our platform</li>
                  <li><strong>Exclusive Updates:</strong> Get behind-the-scenes insights and feature previews</li>
                  <li><strong>Direct Feedback:</strong> Help shape the product with your input</li>
                  <li><strong>Special Pricing:</strong> Lock in early adopter rates for life</li>
                </ul>
                
                <h3>Stay Connected</h3>
                <p>We'll keep you updated on our progress and notify you as soon as we're ready to launch. Expect to hear from us soon!</p>
                
                <p>Best regards,<br>
                The GetInsightZ Team</p>
              </div>
              <div class="footer">
                <p>© 2024 GetInsightZ. All rights reserved.</p>
                <p>If you have any questions, reply to this email.</p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      if (error) {
        console.error('Error sending welcome email:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      console.error('Unexpected error sending welcome email:', error);
      return { success: false, error: 'Failed to send welcome email' };
    }
  },

  // Send approval email when status changes to approved
  async sendApprovalEmail(email: string, fullName: string) {
    try {
      const { data, error } = await resend.emails.send({
        from: 'GetInsightZ <noreply@getinsightz.com>',
        to: [email],
        subject: '🎉 You\'re Approved! GetInsightZ Early Access is Ready',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>GetInsightZ Early Access Approved</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .button { display: inline-block; background: #28a745; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: bold; }
              .highlight { background: #d4edda; padding: 15px; border-radius: 5px; border-left: 4px solid #28a745; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 Congratulations!</h1>
                <p>Your GetInsightZ early access has been approved</p>
              </div>
              <div class="content">
                <h2>Hi ${fullName},</h2>
                <p>Great news! Your early access application has been approved, and you're now ready to experience GetInsightZ!</p>
                
                <div class="highlight">
                  <strong>🚀 You're In!</strong><br>
                  Your account is now active and ready to use.
                </div>
                
                <h3>What You Can Do Now:</h3>
                <ul>
                  <li><strong>Access the Platform:</strong> Log in and start exploring</li>
                  <li><strong>Discover Trends:</strong> Find the next viral products</li>
                  <li><strong>Track Prices:</strong> Monitor competitor pricing in real-time</li>
                  <li><strong>Analyze Markets:</strong> Get comprehensive market insights</li>
                </ul>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://app.getinsightz.com" class="button">🚀 Launch GetInsightZ</a>
                </div>
                
                <h3>Need Help?</h3>
                <p>Our team is here to help you get started. Don't hesitate to reach out if you have any questions!</p>
                
                <p>Welcome aboard!<br>
                The GetInsightZ Team</p>
              </div>
              <div class="footer">
                <p>© 2024 GetInsightZ. All rights reserved.</p>
                <p>This is an automated message. Please do not reply directly to this email.</p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      if (error) {
        console.error('Error sending approval email:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      console.error('Unexpected error sending approval email:', error);
      return { success: false, error: 'Failed to send approval email' };
    }
  },

  // Send rejection email when status changes to rejected
  async sendRejectionEmail(email: string, fullName: string, reason?: string) {
    try {
      const { data, error } = await resend.emails.send({
        from: 'GetInsightZ <noreply@getinsightz.com>',
        to: [email],
        subject: 'GetInsightZ Application Update',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>GetInsightZ Application Update</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #6c757d 0%, #495057 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .highlight { background: #f8d7da; padding: 15px; border-radius: 5px; border-left: 4px solid #dc3545; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Application Update</h1>
                <p>Important information about your GetInsightZ application</p>
              </div>
              <div class="content">
                <h2>Hi ${fullName},</h2>
                <p>Thank you for your interest in GetInsightZ. We've reviewed your application and unfortunately, we're unable to approve it at this time.</p>
                
                ${reason ? `
                <div class="highlight">
                  <strong>Reason:</strong> ${reason}
                </div>
                ` : ''}
                
                <h3>What This Means:</h3>
                <ul>
                  <li>Your application has been reviewed by our team</li>
                  <li>We're unable to provide early access at this time</li>
                  <li>You can reapply in the future if circumstances change</li>
                </ul>
                
                <h3>Stay Updated</h3>
                <p>We'll keep you informed about our public launch and future opportunities to join our platform.</p>
                
                <p>Thank you for your understanding.<br>
                The GetInsightZ Team</p>
              </div>
              <div class="footer">
                <p>© 2024 GetInsightZ. All rights reserved.</p>
                <p>This is an automated message. Please do not reply directly to this email.</p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      if (error) {
        console.error('Error sending rejection email:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      console.error('Unexpected error sending rejection email:', error);
      return { success: false, error: 'Failed to send rejection email' };
    }
  },

  // Send support confirmation email to user
  async sendSupportConfirmation(email: string, fullName: string, ticketId: string, subject: string) {
    try {
      const { data, error } = await resend.emails.send({
        from: 'GetInsightZ Support <support@getinsightz.com>',
        to: [email],
        subject: `Support Ticket #${ticketId.slice(0, 8)} - We\'ve received your request`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Support Ticket Confirmation</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .highlight { background: #fff3cd; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc107; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎫 Support Ticket Received</h1>
                <p>We've got your message and we're on it!</p>
              </div>
              <div class="content">
                <h2>Hi ${fullName},</h2>
                <p>Thank you for reaching out to GetInsightZ support. We've received your request and our team will get back to you as soon as possible.</p>
                
                <div class="highlight">
                  <strong>Ticket Details:</strong><br>
                  📧 Ticket ID: #${ticketId.slice(0, 8)}<br>
                  📝 Subject: ${subject}<br>
                  ⏰ Submitted: ${new Date().toLocaleString()}
                </div>
                
                <h3>What happens next?</h3>
                <ul>
                  <li><strong>Review:</strong> Our support team will review your request</li>
                  <li><strong>Response:</strong> You'll receive a detailed response within 24 hours</li>
                  <li><strong>Updates:</strong> We'll keep you informed of any progress</li>
                </ul>
                
                <h3>Need immediate help?</h3>
                <p>If your issue is urgent, please reply to this email with "URGENT" in the subject line.</p>
                
                <p>Best regards,<br>
                The GetInsightZ Support Team</p>
              </div>
              <div class="footer">
                <p>© 2024 GetInsightZ. All rights reserved.</p>
                <p>This is an automated confirmation. Please do not reply to this email.</p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      if (error) {
        console.error('Error sending support confirmation email:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      console.error('Unexpected error sending support confirmation email:', error);
      return { success: false, error: 'Failed to send support confirmation email' };
    }
  },

  // Send support notification email to support team
  async sendSupportNotification(userEmail: string, userName: string, subject: string, message: string, category: string, priority: string, ticketId: string) {
    try {
      const { data, error } = await resend.emails.send({
        from: 'GetInsightZ System <system@getinsightz.com>',
        to: ['support@getinsightz.com'], // Update with your support email
        subject: `[${priority.toUpperCase()}] New Support Ticket #${ticketId.slice(0, 8)} - ${subject}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Support Ticket</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .highlight { background: #f8d7da; padding: 15px; border-radius: 5px; border-left: 4px solid #dc3545; }
              .message-box { background: #fff; padding: 15px; border-radius: 5px; border: 1px solid #ddd; margin: 15px 0; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚨 New Support Ticket</h1>
                <p>Priority: ${priority.toUpperCase()} | Category: ${category}</p>
              </div>
              <div class="content">
                <div class="highlight">
                  <strong>Ticket ID:</strong> #${ticketId.slice(0, 8)}<br>
                  <strong>Priority:</strong> ${priority.toUpperCase()}<br>
                  <strong>Category:</strong> ${category}<br>
                  <strong>Submitted:</strong> ${new Date().toLocaleString()}
                </div>
                
                <h3>User Information</h3>
                <p><strong>Name:</strong> ${userName}<br>
                <strong>Email:</strong> ${userEmail}</p>
                
                <h3>Subject</h3>
                <p>${subject}</p>
                
                <h3>Message</h3>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
                
                <p><strong>Action Required:</strong> Please respond to this user within 24 hours.</p>
              </div>
              <div class="footer">
                <p>© 2024 GetInsightZ. All rights reserved.</p>
                <p>This is an automated notification from the support system.</p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      if (error) {
        console.error('Error sending support notification email:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      console.error('Unexpected error sending support notification email:', error);
      return { success: false, error: 'Failed to send support notification email' };
    }
  },

  // Send support status update email to user
  async sendSupportStatusUpdate(email: string, fullName: string, subject: string, status: string, ticketId: string) {
    try {
      const statusColors = {
        'open': '#007bff',
        'in_progress': '#ffc107',
        'resolved': '#28a745',
        'closed': '#6c757d'
      };

      const statusMessages = {
        'open': 'Your ticket has been opened and is being reviewed.',
        'in_progress': 'We are actively working on your request.',
        'resolved': 'Your issue has been resolved!',
        'closed': 'Your ticket has been closed.'
      };

      const { data, error } = await resend.emails.send({
        from: 'GetInsightZ Support <support@getinsightz.com>',
        to: [email],
        subject: `Support Ticket #${ticketId.slice(0, 8)} - Status Updated to ${status.replace('_', ' ').toUpperCase()}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Support Ticket Status Update</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, ${statusColors[status as keyof typeof statusColors]} 0%, ${statusColors[status as keyof typeof statusColors]}dd 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .highlight { background: #fff3cd; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc107; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📋 Status Update</h1>
                <p>Your support ticket has been updated</p>
              </div>
              <div class="content">
                <h2>Hi ${fullName},</h2>
                <p>Your support ticket has been updated with a new status.</p>
                
                <div class="highlight">
                  <strong>Ticket Details:</strong><br>
                  📧 Ticket ID: #${ticketId.slice(0, 8)}<br>
                  📝 Subject: ${subject}<br>
                  🔄 New Status: ${status.replace('_', ' ').toUpperCase()}<br>
                  ⏰ Updated: ${new Date().toLocaleString()}
                </div>
                
                <h3>What this means:</h3>
                <p>${statusMessages[status as keyof typeof statusMessages]}</p>
                
                <h3>Next Steps:</h3>
                <ul>
                  <li>If you have any questions, reply to this email</li>
                  <li>We'll continue to keep you updated on progress</li>
                  <li>Thank you for your patience</li>
                </ul>
                
                <p>Best regards,<br>
                The GetInsightZ Support Team</p>
              </div>
              <div class="footer">
                <p>© 2024 GetInsightZ. All rights reserved.</p>
                <p>This is an automated status update. Please do not reply to this email.</p>
              </div>
            </div>
          </body>
          </html>
        `
      });

      if (error) {
        console.error('Error sending support status update email:', error);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      console.error('Unexpected error sending support status update email:', error);
      return { success: false, error: 'Failed to send support status update email' };
    }
  }
}; 