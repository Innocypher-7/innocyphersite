# Innocypher Backend - Email Service Setup Guide

## Overview

This backend service handles contact form submissions and sends emails via SMTP. It includes validation, error handling, and attractive HTML email templates.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- SMTP server credentials (Gmail, SendGrid, etc.)

## Installation

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and fill in your SMTP credentials:

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

```env
# Email Configuration
FROM_MAIL=your-email@gmail.com
TO_MAIL=contact@yourcompany.com

# SMTP Server Configuration (Example: Gmail)
SMTP_HOST=smtp.gmail.com
STMP_PORT=587
STMP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Server Configuration
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## SMTP Configuration Examples

### Gmail Setup

1. Enable "Less secure app access" or use an App Password:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification
   - Create an App Password (generates 16-character password)
   - Use the 16-character password as `SMTP_PASSWORD`

2. SMTP Settings:
   - `SMTP_HOST`: `smtp.gmail.com`
   - `STMP_PORT`: `587` (TLS) or `465` (SSL)
   - `STMP_USERNAME`: Your Gmail address
   - `SMTP_PASSWORD`: Your App Password

### SendGrid Setup

1. Create account at https://sendgrid.com

2. Generate API key in Settings > API Keys

3. SMTP Settings:
   - `SMTP_HOST`: `smtp.sendgrid.net`
   - `STMP_PORT`: `587`
   - `STMP_USERNAME`: `apikey`
   - `SMTP_PASSWORD`: Your SendGrid API key

### Outlook/Office 365 Setup

1. SMTP Settings:
   - `SMTP_HOST`: `smtp-mail.outlook.com`
   - `STMP_PORT`: `587`
   - `STMP_USERNAME`: Your Outlook email
   - `SMTP_PASSWORD`: Your Outlook password

## Running the Server

### Development Mode (with auto-reload)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in `.env`)

## API Endpoints

### Health Check

```
GET /api/health
```

Response:

```json
{
  "status": "ok",
  "message": "Backend server is running",
  "timestamp": "2024-03-29T10:30:00.000Z"
}
```

### Send Contact Email

```
POST /api/contact/send
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Website Inquiry",
  "message": "I would like to discuss a project..."
}
```

Response (Success):

```json
{
  "success": true,
  "message": "Your message has been sent successfully! We'll get back to you soon.",
  "data": {
    "success": true,
    "messageId": "<email-message-id>",
    "message": "Email sent successfully!"
  }
}
```

Response (Error):

```json
{
  "success": false,
  "message": "Validation error message or server error"
}
```

## Validation Rules

- **Name**: 2-100 characters
- **Email**: Valid email format
- **Subject**: 3-200 characters
- **Message**: 10-5000 characters

All fields are required.

## Email Template Features

The service generates attractive HTML emails with:

- Dark theme with blue gradient accent
- Sender information clearly displayed
- Formatted message content
- Reply button
- Professional footer with branding
- Responsive design for all clients
- Tech-inspired styling

## Testing the Contact Form

### Using cURL

```bash
curl -X POST http://localhost:5000/api/contact/send \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message for the contact form."
  }'
```

### Using Postman

1. Create a new POST request to `http://localhost:5000/api/contact/send`
2. Set Headers: `Content-Type: application/json`
3. Set Body (raw JSON):
   ```json
   {
     "name": "Test User",
     "email": "test@example.com",
     "subject": "Test Subject",
     "message": "This is a test message for the contact form."
   }
   ```

## Frontend Configuration

Update your React environment variables in `.env`:

```env
REACT_APP_API_URL=http://localhost:5000/api/contact/send
```

For production, update to your deployed backend URL:

```env
REACT_APP_API_URL=https://api.yourdomain.com/api/contact/send
```

## Troubleshooting

### "SMTP connection error"

- Verify SMTP credentials are correct
- Check firewall/network allows connection to SMTP server
- For Gmail: ensure App Password is used (not regular password)
- Check port is correct (587 for TLS, 465 for SSL)

### "Authentication failed"

- Re-verify username and password
- For Gmail: generate new App Password
- Enable "Less secure app access" if not using App Password

### "Email not received"

- Check `TO_MAIL` environment variable
- Verify email isn't in spam folder
- Check SMTP server logs for errors
- Ensure `FROM_MAIL` is verified with SMTP server

### CORS errors

- Verify `CORS_ORIGIN` in `.env` matches your frontend URL
- For development: `http://localhost:3000`
- For production: your actual domain

## Security Considerations

1. **Never commit `.env` file** - it contains sensitive credentials
2. **Use environment variables** for all secrets
3. **Validate all inputs** on both frontend and backend
4. **Sanitize user data** before processing
5. **Use HTTPS in production**
6. **Rate limit** contact form submissions if needed
7. **Monitor logs** for suspicious activity

## File Structure

```
backend/
├── server.js              # Main Express server
├── package.json           # Dependencies
├── .env.example           # Environment variables template
├── .env                   # (git ignored) Actual credentials
├── services/
│   └── emailService.js    # Email sending logic & templates
└── routes/
    └── contact.js         # Contact form API endpoint
```

## Dependencies

- **express**: Web framework
- **cors**: Cross-Origin Resource Sharing
- **nodemailer**: Email sending
- **dotenv**: Environment variable management

## Additional Resources

- [Nodemailer Documentation](https://nodemailer.com/)
- [Express.js Guide](https://expressjs.com/)
- [CORS Documentation](https://github.com/expressjs/cors)

---

For issues or questions, please check the logs for detailed error messages and consult the troubleshooting section above.
