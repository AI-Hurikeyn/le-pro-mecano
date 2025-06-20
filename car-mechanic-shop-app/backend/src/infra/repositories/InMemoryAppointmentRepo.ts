import { Appointment } from '../../domain/entities/Appointment';
import { AppointmentRepository } from '../../domain/repositories/AppointmentRepository';

export class InMemoryAppointmentRepo implements AppointmentRepository {
  public appointments: Appointment[] = [];

  async save(appointment: Appointment): Promise<void> {
    this.appointments.push(appointment);
  }

  async findById(id: string): Promise<Appointment | null> {
    return this.appointments.find(a => a.id === id) || null;
  }

  async findAvailableSlots(date: Date): Promise<Date[]> {
    // For demo: return next 5 half-hour slots
    const slots: Date[] = [];
    for (let i = 9; i < 14; i++) {
      const slot = new Date(date);
      slot.setHours(i, 0, 0, 0);
      slots.push(slot);
    }
    return slots;
  }

  // Add getAll method for GET endpoint
  getAll(): Appointment[] {
    return this.appointments;
  }
}
