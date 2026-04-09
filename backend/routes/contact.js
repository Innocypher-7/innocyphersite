const express = require("express");
const router = express.Router();
const { sendContactEmail, sendAutoReplyEmail } = require("../services/emailService");

// Validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  // Check required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields: name, email, subject, message",
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  // Validate field lengths
  if (name.trim().length < 2 || name.trim().length > 100) {
    return res.status(400).json({
      success: false,
      message: "Name must be between 2 and 100 characters",
    });
  }

  if (subject.trim().length < 3 || subject.trim().length > 200) {
    return res.status(400).json({
      success: false,
      message: "Subject must be between 3 and 200 characters",
    });
  }

  if (message.trim().length < 10 || message.trim().length > 5000) {
    return res.status(400).json({
      success: false,
      message: "Message must be between 10 and 5000 characters",
    });
  }

  next();
};

// POST endpoint for contact form
router.post("/send", validateContactForm, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedSubject = subject.trim();
    const sanitizedMessage = message.trim();

    // Send email to admin
    const result = await sendContactEmail(
      sanitizedName,
      sanitizedEmail,
      sanitizedSubject,
      sanitizedMessage,
    );

    // Send auto-reply to the user
    await sendAutoReplyEmail(sanitizedName, sanitizedEmail);

    res.status(200).json({
      success: true,
      message:
        "Your message has been sent successfully! We'll get back to you soon.",
      data: result,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message:
        error.message || "Failed to send contact form. Please try again.",
    });
  }
});

module.exports = router;
