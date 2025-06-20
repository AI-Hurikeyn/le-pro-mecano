import { Appointment } from '../../domain/entities/Appointment';
import { AppointmentRepository } from '../../domain/repositories/AppointmentRepository';

export class CreateAppointmentUseCase {
  constructor(private repo: AppointmentRepository) {}

  async execute(input: {
    customerName: string;
    vehicle: { make: string; model: string; mileage: number };
    serviceType: string;
    date: Date;
    userId: string;
  }): Promise<Appointment> {
    // Check slot availability (skipped for brevity)
    const appointment = new Appointment({
      id: Date.now().toString(),
      customerName: input.customerName,
      vehicle: input.vehicle,
      serviceType: input.serviceType,
      date: input.date,
      userId: input.userId, // <-- Pass userId directly
    });
    await this.repo.save(appointment);
    return appointment;
  }
}
