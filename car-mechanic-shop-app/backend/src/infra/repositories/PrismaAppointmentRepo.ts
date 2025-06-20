import { PrismaClient } from '@prisma/client';
import { AppointmentRepository } from '../../domain/repositories/AppointmentRepository';
import { Appointment as DomainAppointment } from '../../domain/entities/Appointment';

const prisma = new PrismaClient();

function toPrismaData(appointment: DomainAppointment) {
  return {
    id: appointment.id,
    customerName: appointment.customerName,
    vehicleMake: appointment.vehicle.make,
    vehicleModel: appointment.vehicle.model,
    mileage: appointment.vehicle.mileage,
    serviceType: appointment.serviceType,
    date: appointment.date,
    status: appointment.status,
    userId: appointment.userId, // <-- Use type-safe userId
  };
}

function toDomain(prismaApp: any): DomainAppointment {
  return new DomainAppointment({
    id: prismaApp.id,
    customerName: prismaApp.customerName,
    vehicle: {
      make: prismaApp.vehicleMake,
      model: prismaApp.vehicleModel,
      mileage: prismaApp.mileage,
    },
    serviceType: prismaApp.serviceType,
    date: prismaApp.date,
    status: prismaApp.status as any,
    userId: prismaApp.userId, // <-- Add userId
  });
}

export class PrismaAppointmentRepo implements AppointmentRepository {
  async save(appointment: DomainAppointment): Promise<void> {
    await prisma.appointment.create({ data: toPrismaData(appointment) });
  }

  async findById(id: string): Promise<DomainAppointment | null> {
    const prismaApp = await prisma.appointment.findUnique({ where: { id } });
    return prismaApp ? toDomain(prismaApp) : null;
  }

  async findAvailableSlots(date: Date): Promise<Date[]> {
    // Example: return next 5 half-hour slots (customize as needed)
    const slots: Date[] = [];
    for (let i = 9; i < 14; i++) {
      const slot = new Date(date);
      slot.setHours(i, 0, 0, 0);
      slots.push(slot);
    }
    return slots;
  }

  async getAll(): Promise<DomainAppointment[]> {
    const prismaApps = await prisma.appointment.findMany();
    return prismaApps.map(toDomain);
  }
}
