import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Auth } from './entities/auth.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from 'src/token/token.service';
import { CryptoService } from 'src/crypto/crypto.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private tokenService: TokenService,
    private crypto: CryptoService,
  ) {}

  async refreshToken(refreshToken: string | null): Promise<Auth> {
    if (!refreshToken)
      throw new UnauthorizedException(
        `O refresh token deve ser enviado na propriedade 'refresh-token' em header`,
      );

    const token = await this.prismaService.refreshToken.findFirst({
      where: {
        codigo: refreshToken,
      },
      include: {
        User: {
          omit: {
            password: true,
          },
          include: {
            Image: true,
          },
        },
      },
    });

    if (!token) {
      throw new UnauthorizedException(
        `refresh token '${refreshToken}' invalido`,
      );
    }

    const auth = new Auth();
    auth.user = token.User as any;
    auth.accessToken = this.tokenService.create({ id: token.User?.id });
    auth.refreshToken = this.tokenService.generate();

    await this.prismaService.refreshToken.update({
      where: {
        id: token.id,
      },
      data: {
        codigo: auth.refreshToken,
      },
    });

    return auth;
  }

  async login(loginAuthDto: LoginAuthDto): Promise<any> {}

  async create(createAuthDto: CreateAuthDto): Promise<void> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: createAuthDto.email,
      },
      select: {
        id: true,
        email: true,
      },
    });

    if (user)
      throw new ConflictException(`email '${createAuthDto.email}' ja existe`);

    createAuthDto.password = this.crypto.create(createAuthDto.password);

    const { id } = await this.prismaService.user.create({
      data: createAuthDto,
      select: {
        id: true,
      },
    });

    const codigo = this.tokenService.generate();

    await this.prismaService.refreshToken.create({
      data: {
        codigo,
        userId: id,
      },
    });
  }
}
