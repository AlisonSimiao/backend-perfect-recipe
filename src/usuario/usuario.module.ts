import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { ImageService } from 'src/image/image.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CryptoService } from 'src/crypto/crypto.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService, ImageService, CryptoService],
})
export class UsuarioModule {}
