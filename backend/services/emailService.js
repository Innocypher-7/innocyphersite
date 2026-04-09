const nodemailer = require("nodemailer");

// Create transporter with SMTP configuration from environment variables
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.STMP_PORT, 10),
    secure: parseInt(process.env.STMP_PORT, 10) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.STMP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

// Generate HTML email template
const generateEmailTemplate = (name, email, subject, message) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Request</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 40px 20px;
          border-radius: 12px;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 2px solid rgba(59, 130, 246, 0.5);
          padding-bottom: 20px;
        }
        .header h1 {
          color: #3b82f6;
          font-size: 28px;
          margin-bottom: 10px;
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }
        .header p {
          color: #94a3b8;
          font-size: 14px;
        }
        .content {
          background: rgba(30, 41, 59, 0.8);
          padding: 30px;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
          margin-bottom: 20px;
        }
        .greeting {
          color: #e2e8f0;
          font-size: 16px;
          margin-bottom: 20px;
          font-weight: 500;
        }
        .info-block {
          margin-bottom: 25px;
          padding: 15px;
          background: rgba(15, 23, 42, 0.5);
          border-radius: 6px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .info-label {
          color: #3b82f6;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .info-value {
          color: #e2e8f0;
          font-size: 16px;
          word-break: break-all;
        }
        .message-block {
          margin-bottom: 25px;
          padding: 20px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 6px;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        .message-label {
          color: #3b82f6;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .message-content {
          color: #e2e8f0;
          font-size: 15px;
          line-height: 1.8;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .action-section {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(59, 130, 246, 0.2);
          text-align: center;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: #ffffff;
          padding: 14px 32px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
          margin: 10px 5px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        .cta-button:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
          transform: translateY(-2px);
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(59, 130, 246, 0.2);
          color: #64748b;
          font-size: 12px;
        }
        .footer-links {
          margin-top: 10px;
        }
        .footer-links a {
          color: #3b82f6;
          text-decoration: none;
          margin: 0 10px;
          font-size: 12px;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        .divider {
          height: 1px;
          background: rgba(59, 130, 246, 0.2);
          margin: 20px 0;
        }
        .tech-badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          margin-top: 10px;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>📨 New Contact Request</h1>
          <p>Someone wants to connect with you</p>
        </div>

        <!-- Main Content -->
        <div class="content">
          <div class="greeting">Hello Team,</div>

          <div class="divider"></div>

          <!-- Sender Information -->
          <div class="info-block">
            <div class="info-label">👤 Sender Name</div>
            <div class="info-value">${name}</div>
          </div>

          <div class="info-block">
            <div class="info-label">📧 Email Address</div>
            <div class="info-value">
              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
            </div>
          </div>

          <div class="info-block">
            <div class="info-label">📝 Subject</div>
            <div class="info-value">${subject}</div>
          </div>

          <div class="divider"></div>

          <!-- Message Block -->
          <div class="message-block">
            <div class="message-label">💬 Message Details</div>
            <div class="message-content">${message}</div>
          </div>

          <!-- Action Section -->
          <div class="action-section">
            <p style="color: #94a3b8; margin-bottom: 15px; font-size: 14px;">
              Ready to respond? Click the button below to reply.
            </p>
            <a href="mailto:${email}?subject=Re: ${subject}" class="cta-button">
              Click to Reply
            </a>
            <div class="tech-badge">⚡ Received via Contact Form</div>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>
            This email was automatically generated from a contact form submission.
          </p>
          <p style="margin-top: 10px;">© ${new Date().getFullYear()} Innocypher. All rights reserved.</p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send email function
const sendContactEmail = async (name, email, subject, message) => {
  try {
    const transporter = createTransporter();

    // Verify connection
    await transporter.verify();

    const toEmail = process.env.TO_MAIL;
    const fromEmail = process.env.FROM_MAIL;

    // Mail options
    const mailOptions = {
      from: `"${name}" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Request: ${subject}`,
      html: generateEmailTemplate(name, email, subject, message),
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);
    return {
      success: true,
      messageId: info.messageId,
      message: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

// Generate HTML auto-reply template
const generateAutoReplyTemplate = (name) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Thank You for Contacting Us</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 20px; border-radius: 12px; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid rgba(59, 130, 246, 0.5); padding-bottom: 20px; }
        .header h1 { color: #3b82f6; font-size: 28px; margin-bottom: 10px; text-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
        .content { background: rgba(30, 41, 59, 0.8); padding: 30px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 20px; color: #e2e8f0; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(59, 130, 246, 0.2); color: #64748b; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>Thank You!</h1>
        </div>
        <!-- Main Content -->
        <div class="content">
          <p style="font-size: 16px; margin-bottom: 20px; font-weight: 500;">Hi ${name},</p>
          <p>We've received your message and wanted to let you know that our team is looking into it. We will get back to you as soon as possible.</p>
          <br/>
          <p>Best regards,<br/><strong>The Innocypher Team</strong></p>
        </div>
        <!-- Footer -->
        <div class="footer">
          <p>© ${new Date().getFullYear()} Innocypher. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send auto-reply function
const sendAutoReplyEmail = async (name, email) => {
  try {
    const transporter = createTransporter();
    const fromEmail = process.env.FROM_MAIL;

    const mailOptions = {
      from: `"Innocypher Team" <${fromEmail}>`,
      to: email,
      subject: "Thank you for contacting Innocypher",
      html: generateAutoReplyTemplate(name),
      text: `Hi ${name},\n\nWe've received your message and wanted to let you know that our team is looking into it. We will get back to you as soon as possible.\n\nBest regards,\nThe Innocypher Team`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Auto-reply sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending auto-reply:", error);
    // Don't throw error to avoid breaking the main contact flow
    return false;
  }
};

module.exports = {
  sendContactEmail,
  sendAutoReplyEmail,
};
