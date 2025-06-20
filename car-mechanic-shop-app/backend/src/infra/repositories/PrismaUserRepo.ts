import { PrismaClient } from '@prisma/client';
import { User } from '../../domain/entities/User';

const prisma = new PrismaClient();

export class PrismaUserRepo {
  async save(user: User): Promise<void> {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {
        username: user.username,
        email: user.email,
        passwordHash: user.passwordHash,
        verified: user.verified,
        verificationToken: user.verificationToken,
      },
      create: {
        id: user.id,
        username: user.username,
        email: user.email,
        passwordHash: user.passwordHash,
        verified: user.verified,
        verificationToken: user.verificationToken,
      },
    });
  }

  async findByUsername(username: string): Promise<User | null> {
    const prismaUser = await prisma.user.findUnique({ where: { username } });
    if (!prismaUser) return null;
    return new User({
      id: prismaUser.id,
      username: prismaUser.username,
      email: prismaUser.email,
      passwordHash: prismaUser.passwordHash,
      verified: prismaUser.verified,
      verificationToken: prismaUser.verificationToken ?? undefined,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const prismaUser = await prisma.user.findUnique({ where: { email } });
    if (!prismaUser) return null;
    return new User({
      id: prismaUser.id,
      username: prismaUser.username,
      email: prismaUser.email,
      passwordHash: prismaUser.passwordHash,
      verified: prismaUser.verified,
      verificationToken: prismaUser.verificationToken ?? undefined,
    });
  }

  async findById(id: string): Promise<User | null> {
    const prismaUser = await prisma.user.findUnique({ where: { id } });
    if (!prismaUser) return null;
    return new User({
      id: prismaUser.id,
      username: prismaUser.username,
      email: prismaUser.email,
      passwordHash: prismaUser.passwordHash,
      verified: prismaUser.verified,
      verificationToken: prismaUser.verificationToken ?? undefined,
    });
  }

  async findByVerificationToken(token: string): Promise<User | null> {
    const prismaUser = await prisma.user.findFirst({ where: { verificationToken: token } });
    if (!prismaUser) return null;
    return new User({
      id: prismaUser.id,
      username: prismaUser.username,
      email: prismaUser.email,
      passwordHash: prismaUser.passwordHash,
      verified: prismaUser.verified,
      verificationToken: prismaUser.verificationToken ?? undefined,
    });
  }
}
