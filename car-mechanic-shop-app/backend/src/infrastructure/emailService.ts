import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'user@example.com',
    pass: process.env.SMTP_PASS || 'password',
  },
});

export async function sendVerificationEmail(to: string, token: string) {
  const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/verify?token=${token}`;
  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'noreply@example.com',
    to,
    subject: 'Verify your email',
    html: `<p>Please verify your email by clicking the link below:</p><p><a href="${verificationUrl}">Verify Email</a></p>`
  });
}
