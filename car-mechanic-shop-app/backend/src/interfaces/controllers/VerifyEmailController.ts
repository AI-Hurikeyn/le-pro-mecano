import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { sendEmail } from '../../utils/sendEmail';
import crypto from 'crypto';

const prisma = new PrismaClient();

/**
 * Sends a verification email after user registration.
 */
export const sendVerificationEmail = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    // Generate a unique verification token
    const token = crypto.randomBytes(32).toString('hex');

    // Save the token to the user in the database
    await prisma.user.update({
      where: { email },
      data: { verificationToken: token },
    });

    // Send the verification email
    const verificationLink = `${process.env.FRONTEND_URL}/verify?token=${token}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333; text-align: center;">Email Verification</h1>
        <p style="color: #666; line-height: 1.6;">Thank you for registering with LE PRO MECANO!</p>
        <p style="color: #666; line-height: 1.6;">Please click the button below to verify your email address:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationLink}" 
             style="background-color: #f59e0b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
            Verify Email
          </a>
        </div>
        <p style="color: #999; font-size: 12px;">If you can't click the button, copy and paste this link: ${verificationLink}</p>
      </div>
    `;

    await sendEmail(email, 'Verify Your Email - LE PRO MECANO', htmlContent);

    res.status(200).json({ message: 'Verification email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send verification email' });
  }
};

/**
 * Verifies the user's email using the token.
 */
export const verifyEmailToken = async (req: Request, res: Response) => {
  const { token } = req.query;

  try {
    if (!token || typeof token !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing token' });
    }

    // Find the user with the token
    const user = await prisma.user.findFirst({
      where: { verificationToken: token },
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    // Mark the user as verified and clear the token
    await prisma.user.update({
      where: { id: user.id },
      data: { verified: true, verificationToken: null },
    });

    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to verify email' });
  }
};
