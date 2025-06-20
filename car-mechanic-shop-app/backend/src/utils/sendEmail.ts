import 'dotenv/config';
import nodemailer from 'nodemailer';

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER!, // Your email address
    pass: process.env.SMTP_PASS!, // Your email password or app password
  },
});

/**
 * Sends an email using the configured transporter.
 * @param to - Recipient's email address
 * @param subject - Subject of the email
 * @param html - HTML content of the email
 */
export const sendEmail = async (to: string, subject: string, html: string) => {
  console.log(`[sendEmail.ts] NODE_ENV: ${process.env.NODE_ENV}`); // <-- ADD THIS LINE
  // Skip sending emails in development environment
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Dev mode: skipping email send to ${to} with subject '${subject}'`);
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM, // Sender's email address
      to,
      subject,
      html,
    });

    console.log(`Email sent: ${info.messageId}`);
  } catch (error) {
    console.error(`Failed to send email: ${error}`);
    throw new Error('Email sending failed');
  }
};
