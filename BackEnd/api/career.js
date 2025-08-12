import multer from 'multer';
import nodemailer from 'nodemailer';
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Set up multer to handle file uploads
const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage: storage }).single('resume'); // 'resume' matches the field name for the file input

// Corrected Transporter Configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
 auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your 16-character App Password
    to: process.env.EMAIL_TO,
  },
});

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Use multer middleware to handle file upload
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error during file upload', error: err.message });
    }

    const { name, email, countryCode, whatsapp } = req.body;

    // Basic validation for required fields
    if (!name || !email || !countryCode || !whatsapp || !req.file) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Define the email content
    const mailOptions = {
       from: process.env.EMAIL_USER,
       replyTo: email,
       to: process.env.EMAIL_TO, // Send to yourself
      subject: `New Career Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Country Code: ${countryCode}
        WhatsApp: ${whatsapp}
      `,
      attachments: req.file ? [{
        filename: req.file.originalname,
        content: req.file.buffer, // Attach the file buffer directly
      }] : [],
    };

    // Send the email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error sending email', error: err.message });
      }
      console.log('Message sent: ' + info.response);

      // Respond with success after sending email
      res.status(200).json({ message: 'Career form submitted and email sent successfully' });
    });
  });
}