import { Request, Response } from 'express';
import { z } from 'zod';
import { CreateAppointmentUseCase } from '../../application/use-cases/CreateAppointment';
import { PrismaAppointmentRepo } from '../../infra/repositories/PrismaAppointmentRepo';

const repo = new PrismaAppointmentRepo();
const useCase = new CreateAppointmentUseCase(repo);

// Zod schema for appointment validation
export const appointmentSchema = z.object({
  customerName: z.string().min(1, 'Customer name is required'),
  vehicle: z.object({
    make: z.string().min(1),
    model: z.string().min(1),
    mileage: z.number().int().nonnegative(),
  }),
  serviceType: z.string().min(1),
  date: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
});

export const createAppointmentController = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate input with Zod
    const parsed = appointmentSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.errors });
      return;
    }
    const { customerName, vehicle, serviceType, date } = parsed.data;
    // Get userId from JWT payload (set by authenticateJWT middleware)
    const userId = (req as any).user?.userId;
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const appointment = await useCase.execute({
      customerName,
      vehicle,
      serviceType,
      date: new Date(date),
      userId,
    });
    res.status(201).json(appointment);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllAppointmentsController = async (req: Request, res: Response): Promise<void> => {
  try {
    // Optionally, filter by userId if you want user-specific appointments
    const appointments = await repo.getAll();
    res.json(appointments);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
