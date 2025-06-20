import { UserRepository } from '../../domain/repositories/UserRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { User } from '../../domain/entities/User';
import { sendEmail } from '../../utils/sendEmail';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

export class LoginUserUseCase {
  constructor(private repo: UserRepository) {}

  async execute(input: { emailOrUsername: string; password: string }): Promise<{ user: User; token: string; message?: string }> {
    let user = await this.repo.findByEmail(input.emailOrUsername);
    if (!user) {
      user = await this.repo.findByUsername(input.emailOrUsername);
    }
    if (!user) throw new Error('Invalid credentials');

    const valid = await bcrypt.compare(input.password, user.passwordHash);
    if (!valid) throw new Error('Invalid credentials');

    if (!user.verified) {
      // User is not verified, resend verification email
      const verificationToken = crypto.randomBytes(32).toString('hex');
      user.verificationToken = verificationToken;
      await this.repo.save(user); // Save the new token

      try {
        const verificationLink = `${process.env.FRONTEND_URL}/verify?token=${verificationToken}`;
        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #333; text-align: center;">Verify Your Email - LE PRO MECANO</h1>
            <p style="color: #666;">Please verify your email to continue using your account:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationLink}" style="background-color: #f59e0b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px;">
                Verify Email
              </a>
            </div>
          </div>
        `;
        await sendEmail(user.email, 'Verify Your Email - LE PRO MECANO', htmlContent);
        // Do not throw error here, let the controller handle the response
        // The user should be informed that a new verification email has been sent.
        return { 
          user, 
          token: '', // No token issued for unverified user
          message: 'User not verified. A new verification email has been sent. Please check your inbox.' 
        };
      } catch (emailErr) {
        console.error('Failed to resend verification email:', emailErr);
        // Even if email sending fails, inform the user they need to verify.
        // Potentially, the previous token is still valid or they can request another one.
        throw new Error('User not verified. Failed to resend verification email. Please try again later or contact support.');
      }
    }

    // User is verified, proceed with login
    const token = jwt.sign({ userId: user.id, username: user.username, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
  }
}
