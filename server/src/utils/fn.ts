import { randomBytes } from 'crypto';

export const generateRandomString = (N: number = 40): string => {
  return randomBytes(N).toString('hex');
};
