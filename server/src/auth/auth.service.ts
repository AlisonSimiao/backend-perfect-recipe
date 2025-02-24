import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Auth } from './entities/auth.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenService } from 'src/token/token.service';
import { CryptoService } from 'src/crypto/crypto.service';
import { RecoveryDto } from './dto/repovery.dto';
import { EmailService } from 'src/email/email.service';
import { add, isAfter } from 'date-fns';
import { VerifyRecoveryCodeDto } from './dto/verify-recovery-code.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  async changePassword(
    body: ChangePasswordDto,
    codigo?: string | null,
  ): Promise<void> {
    if (!codigo) throw new ForbiddenException('acesso nao autorizado');

    const user = await this.prismaService.recoveyCode.findFirst({
      where: { codigo },
    });

    if (!user || isAfter(new Date(), user.expireIn))
      throw new UnauthorizedException('codigo expirado');

    await this.prismaService.user.update({
      where: {
        id: user.userId,
      },
      data: {
        password: body.password,
      },
    });
    return;
  }
  constructor(
    private prismaService: PrismaService,
    private tokenService: TokenService,
    private crypto: CryptoService,
    private emailService: EmailService,
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

  async verifyRecoveryCode(body: VerifyRecoveryCodeDto) {
    const user = await this.prismaService.recoveyCode.findFirst({
      where: {
        User: {
          email: body.email,
        },
      },
      select: {
        codigo: true,
        expireIn: true,
      },
    });

    if (!user || this.crypto.compare(body.codigo, user.codigo || ''))
      throw new UnauthorizedException(`codigo invalido`);

    if (isAfter(new Date(), user.expireIn))
      throw new UnauthorizedException('codigo expirado');

    return {
      recoveryToken: user.codigo,
    };
  }

  async sendRecoveryCode(body: RecoveryDto): Promise<any> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email: body.email,
      },
      select: {
        id: true,
        email: true,
      },
    });

    if (!user)
      throw new NotFoundException(`email '${body.email}' nao cadastrado`);

    const minutes = +(process.env.CODE_EXPIRE_MINUTES || 10);

    const code = this.tokenService.generate(4);

    await this.emailService.sendEmail(body.email, 'sendCode', {
      code,
      expireIn: minutes,
      subject: '[Mensagem automatica] - recuperação de senha',
    });

    await this.prismaService.recoveyCode.upsert({
      where: {
        userId: user.id,
      },
      create: {
        codigo: code,
        expireIn: add(new Date(), { minutes }),
      },
      update: {
        codigo: this.crypto.create(code),
      },
    });

    return {
      message: 'codigo enviado para o email com sucesso',
    };
  }

  async login(loginAuthDto: LoginAuthDto): Promise<Auth> {
    return new Auth()
  }

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
