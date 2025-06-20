import { Router } from 'express';
import { createAppointmentController, getAllAppointmentsController } from '../controllers/AppointmentController';
import { authenticateJWT } from '../middleware/authenticateJWT';

const router = Router();

// Protect appointment routes with JWT
router.post('/appointments', authenticateJWT, createAppointmentController);
router.get('/appointments', authenticateJWT, getAllAppointmentsController);

export default router;
