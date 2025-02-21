import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from 'src/token/token.service';
import { CryptoService } from 'src/crypto/crypto.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, TokenService, CryptoService],
})
export class AuthModule {}
