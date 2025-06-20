export class User {
  public readonly id: string;
  public readonly username: string;
  public readonly email: string;
  public passwordHash: string;
  public verified: boolean;
  public verificationToken?: string;

  constructor(params: { id: string; username: string; email: string; passwordHash: string; verified?: boolean; verificationToken?: string }) {
    if (!params.username) throw new Error('Username is required');
    if (!params.email) throw new Error('Email is required');
    if (!params.passwordHash) throw new Error('Password hash is required');
    this.id = params.id;
    this.username = params.username;
    this.email = params.email;
    this.passwordHash = params.passwordHash;
    this.verified = params.verified ?? false;
    this.verificationToken = params.verificationToken;
  }
}
