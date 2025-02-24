import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { TokenService } from './token/token.service';
import { CryptoService } from './crypto/crypto.service';
import { ImageService } from './image/image.service';

@Module({
  imports: [UsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, TokenService, CryptoService, ImageService],
})
export class AppModule {}
