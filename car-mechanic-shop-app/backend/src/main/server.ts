import dotenv from 'dotenv';

// Load env vars from .env file in the current working directory (backend/)
dotenv.config(); // Simplified: looks for .env in CWD

console.log(`[server.ts] NODE_ENV: ${process.env.NODE_ENV}`);

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import appointmentRoutes from '../interfaces/routes/appointmentRoutes';
import authRoutes from '../interfaces/routes/authRoutes';

const app = express();
app.use(cors()); // Enable CORS for all origins
app.use(express.json());

app.use('/api', appointmentRoutes);
app.use('/api/auth', authRoutes);

// Centralized error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});










