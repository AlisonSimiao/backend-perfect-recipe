import { Injectable } from '@nestjs/common';
import { createHash } from 'node:crypto';

@Injectable()
export class CryptoService {
  compare(password: string, md5: string): boolean {
    return createHash('md5').update(password).digest('hex') === md5;
  }

  create(str: string): string {
    return createHash('md5').update(str).digest('hex');
  }
}
