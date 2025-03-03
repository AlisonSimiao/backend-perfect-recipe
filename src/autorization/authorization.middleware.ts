import { ForbiddenException, Injectable, NestMiddleware } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from 'src/token/token.service';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  constructor(
    private prismaService: PrismaService,
    private tokenService: TokenService,
  ) {}
  async use(req: any, res: any, next: () => void) {
    try {
      const authrization = req.headers?.['access-token']?.split(' ')[0];

      if (!authrization) throw new Error('Token deve ser enviado o header');

      const { id } = this.tokenService.verify<{ id: string }>(authrization);

      const user = await this.prismaService.user.findUnique({
        where: { id },
        select: {
          id: true,
          role: true,
        },
      });

      if (!user) throw new ForbiddenException();

      req['idUser'] = user.id;
      req['role'] = user.role;
      next();
    } catch (err) {
      throw new ForbiddenException({
        message: 'acesso não autorizado',
        details: err.message,
      });
    }
  }
}
