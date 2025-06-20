import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { sendEmail } from '../../utils/sendEmail';

export class RegisterUserUseCase {
  constructor(private repo: UserRepository) {}

  async execute(input: { username: string; email: string; password: string }): Promise<User> {
    const existingUsername = await this.repo.findByUsername(input.username);
    if (existingUsername) throw new Error('Username already taken');
    const existingEmail = await this.repo.findByEmail(input.email);
    if (existingEmail) throw new Error('Email already registered');
    const passwordHash = await bcrypt.hash(input.password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const user = new User({
      id: Date.now().toString(),
      username: input.username,
      email: input.email,
      passwordHash,
      verified: false,
      verificationToken,
    });    await this.repo.save(user);

    // Attempt to send verification email, but do not fail registration if email fails
    try {
      const verificationLink = `${process.env.FRONTEND_URL}/verify?token=${verificationToken}`;
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; text-align: center;">Welcome to LE PRO MECANO!</h1>
          <p style="color: #666;">Thank you for registering with us!</p>
          <p style="color: #666;">Please verify your email:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationLink}" style="background-color: #f59e0b; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px;">
              Verify Email
            </a>
          </div>
        </div>
      `;
      await sendEmail(user.email, 'Verify Your Email - LE PRO MECANO', htmlContent);
    } catch (emailErr) {
      console.error('Email sending failed:', emailErr);
    }
    return user;
  }
}
