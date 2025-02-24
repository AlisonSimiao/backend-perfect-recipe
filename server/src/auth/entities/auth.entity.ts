import { User } from '@prisma/client';

export class Auth {
  user: Omit<User, 'password'>;
  accessToken: string;
  refreshToken: string;
}
