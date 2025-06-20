import { Router } from 'express';
import { registerController, loginController, verifyEmailController } from '../controllers/AuthController';

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/verify-email', verifyEmailController);

export default router;
