# Quick Start Guide - Email Integration

This guide shows how to set up and test the contact form email functionality.

## Prerequisites

- Node.js v18+
- npm
- SMTP credentials (Gmail, SendGrid, or other providers)

## 5-Minute Setup

### Step 1: Backend Dependencies

```bash
npm run install:backend
```

### Step 2: Create Backend Configuration

```bash
cp backend/.env.example backend/.env
```

Open `backend/.env` and update with your SMTP credentials. Example for Gmail:

```env
FROM_MAIL=your-email@gmail.com
TO_MAIL=contact@yourcompany.com
SMTP_HOST=smtp.gmail.com
STMP_PORT=587
STMP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password
PORT=5000
CORS_ORIGIN=http://localhost:3000
```

### Step 3: Create Frontend Configuration

```bash
cp .env.example .env
```

Open `.env` and verify the API URL:

```env
REACT_APP_API_URL=http://localhost:5000/api/contact/send
```

### Step 4: Run Both Services

**Terminal 1 - Backend:**

```bash
npm run dev:backend
```

You should see: `Server running on port 5000`

**Terminal 2 - Frontend:**

```bash
npm start
```

You should see: `Compiled successfully! You can now view innocypher in the browser.`

### Step 5: Test the Contact Form

1. Open http://localhost:3000
2. Scroll to "Let's build something amazing together" section
3. Fill in the form:
   - Name: Any name
   - Email: Any valid email
   - Message: Any message (10+ characters)
4. Click "Send Message"

You should see a success message, and an email should arrive at your `TO_MAIL` address!

## Email Template Features

✅ Dark theme with blue gradient  
✅ Sender information clearly displayed  
✅ Reply button in email  
✅ Responsive design  
✅ Professional formatting  
✅ Tech-inspired styling

## Troubleshooting

### Email not sending?

1. **Check backend is running**: http://localhost:5000/api/health
   - You should see a JSON response

2. **Verify SMTP credentials**:
   - Are username/password correct?
   - For Gmail: Did you use an App Password (16 characters)?
   - Is SMTP enabled in your email provider?

3. **Check console errors**:
   - Frontend: Look at browser console (F12)
   - Backend: Look at terminal where `npm run dev:backend` runs

4. **Verify CORS**:
   - Ensure `CORS_ORIGIN` in `backend/.env` matches your frontend URL

### Gmail Issues?

1. Enable 2-Step Verification: https://myaccount.google.com/security
2. Create App Password (generates 16-character password)
3. Use the 16-character password (no spaces) as `SMTP_PASSWORD`
4. Use `STMP_PORT=587` for TLS

## Production Deployment

### Update URLs for Production

**Frontend .env**:

```env
REACT_APP_API_URL=https://your-api.example.com/api/contact/send
```

**Backend .env**:

```env
CORS_ORIGIN=https://your-domain.com
NODE_ENV=production
```

### Hosting Options

- **Frontend**: Netlify, Vercel, GitHub Pages, AWS S3+CloudFront
- **Backend**: Heroku, AWS EC2, DigitalOcean, Render, Railway

## API Documentation

### Send Email

```
POST /api/contact/send
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Website Inquiry",
  "message": "I would like to discuss..."
}
```

Response:

```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "data": {
    "messageId": "unique-id"
  }
}
```

## File Structure

```
.
├── src/
│   ├── InnoSite.jsx          ← Updated with form submission
│   └── ...
├── backend/
│   ├── server.js             ← Express server
│   ├── services/
│   │   └── emailService.js    ← Email logic & HTML template
│   ├── routes/
│   │   └── contact.js         ← API endpoint
│   ├── package.json
│   ├── .env.example
│   ├── .env                   (git ignored)
│   └── README.md
├── .env.example               ← Frontend config template
├── .env                       (git ignored)
└── README.md
```

## Next Steps

- Add validation email for subscribers
- Implement rate limiting
- Add email templates for different scenarios
- Set up email logs/history
- Add file attachment support
- Implement admin email notifications

## Support

For detailed backend documentation, see [backend/README.md](backend/README.md)

For SMTP provider setup guides, see the Provider-specific sections in backend/README.md
