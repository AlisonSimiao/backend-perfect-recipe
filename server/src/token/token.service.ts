import { Injectable, OnModuleInit } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { generateRandomString } from 'src/utils/fn';

@Injectable()
export class TokenService implements OnModuleInit {
  onModuleInit() {
    console.log(process.env.JWT_SECRET);
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }
  }

  create(data: Record<string, any>): string {
    return jwt.sign(data, process.env.JWT_SECRET || '', {
      ...(process.env.JWT_EXPIRE && { expiresIn: +process.env.JWT_EXPIRE }),
    });
  }

  verify<T>(token: string): T {
    return jwt.verify(token, process.env.JWT_SECRET || '') as T;
  }

  generate(n = 30): string {
    return generateRandomString(n);
  }
}
