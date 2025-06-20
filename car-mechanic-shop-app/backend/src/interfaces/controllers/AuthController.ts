import { Request, Response } from 'express';
import { RegisterUserUseCase } from '../../application/use-cases/RegisterUser';
import { LoginUserUseCase } from '../../application/use-cases/LoginUser';
import { PrismaUserRepo } from '../../infra/repositories/PrismaUserRepo';

const userRepo = new PrismaUserRepo();
const registerUseCase = new RegisterUserUseCase(userRepo);
const loginUseCase = new LoginUserUseCase(userRepo);

export const registerController = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const user = await registerUseCase.execute({ username, email, password });
    res.status(201).json({
      id: user.id,
      username: user.username,
      email: user.email,
      message: 'Registration successful. Please check your email to verify your account.'
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { emailOrUsername, password } = req.body;
    const result = await loginUseCase.execute({ emailOrUsername, password });

    if (result.message) {
      return res.status(403).json({ error: result.message });
    }

    res.json({ 
      id: result.user.id, 
      username: result.user.username, 
      email: result.user.email, 
      token: result.token 
    });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const verifyEmailController = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;
    console.log('[VerifyEmailController] Received token:', token); // Log received token

    if (!token || typeof token !== 'string') {
      console.log('[VerifyEmailController] Invalid or missing token');
      return res.status(400).json({ error: 'Invalid or missing token' });
    }

    const user = await userRepo.findByVerificationToken(token);
    // Log user found, including its verification status before change
    if (user) {
      console.log('[VerifyEmailController] User found by token:', user.email, 'Current verified status:', user.verified);
    } else {
      console.log('[VerifyEmailController] No user found for token:', token);
    }

    if (!user) {
      console.log('[VerifyEmailController] Invalid or expired token for user');
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    user.verified = true;
    user.verificationToken = undefined; // Clear the token
    console.log('[VerifyEmailController] Attempting to save user:', user.email, 'New verified status:', user.verified, 'New token:', user.verificationToken); // Log before save

    await userRepo.save(user);
    console.log('[VerifyEmailController] User saved successfully:', user.email); // Log after save

    res.json({ message: 'Email verified successfully' });
  } catch (err: any) {
    console.error('[VerifyEmailController] Error:', err); // Log any error
    res.status(500).json({ error: err.message });
  }
};
