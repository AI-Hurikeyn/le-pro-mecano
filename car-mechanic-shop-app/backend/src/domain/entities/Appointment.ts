export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled';

export interface Vehicle {
  make: string;
  model: string;
  mileage: number;
}

export class Appointment {
  public readonly id: string;
  public readonly customerName: string;
  public readonly vehicle: Vehicle;
  public readonly serviceType: string;
  public readonly date: Date;
  public status: AppointmentStatus;
  public readonly userId: string; // <-- Add userId

  constructor(params: {
    id: string;
    customerName: string;
    vehicle: Vehicle;
    serviceType: string;
    date: Date;
    userId: string; // <-- Add userId
    status?: AppointmentStatus;
  }) {
    if (!params.customerName) throw new Error('Customer name is required');
    if (!params.vehicle) throw new Error('Vehicle is required');
    if (!params.serviceType) throw new Error('Service type is required');
    if (!params.date) throw new Error('Date is required');
    if (!params.userId) throw new Error('User ID is required'); // <-- Validate userId
    this.id = params.id;
    this.customerName = params.customerName;
    this.vehicle = params.vehicle;
    this.serviceType = params.serviceType;
    this.date = params.date;
    this.userId = params.userId; // <-- Assign userId
    this.status = params.status || 'pending';
  }
}
