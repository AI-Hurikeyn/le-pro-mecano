import { Appointment } from '../entities/Appointment';

export interface AppointmentRepository {
  save(appointment: Appointment): Promise<void>;
  findById(id: string): Promise<Appointment | null>;
  findAvailableSlots(date: Date): Promise<Date[]>;
}
