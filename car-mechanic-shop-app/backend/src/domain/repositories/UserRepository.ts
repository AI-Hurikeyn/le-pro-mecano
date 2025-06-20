import { User } from '../entities/User';

export interface UserRepository {
  save(user: User): Promise<void>;
  findByUsername(username: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
