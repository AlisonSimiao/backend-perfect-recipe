import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { TokenService } from './token/token.service';
import { CryptoService } from './crypto/crypto.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthorizationMiddleware } from './autorization/authorization.middleware';

@Module({
  imports: [UsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, TokenService, CryptoService, PrismaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddleware)
      .exclude({
        method: RequestMethod.ALL,
        path: '/auth/*path',
      })
      .forRoutes('*');
  }
}
