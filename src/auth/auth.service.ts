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
import { RecoveryDto } from './dto/recovery.dto';
import { EmailService } from 'src/email/email.service';
import { add, isAfter } from 'date-fns';
import { VerifyRecoveryCodeDto } from './dto/verify-recovery-code.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private tokenService: TokenService,
    private crypto: CryptoService,
    private emailService: EmailService,
  ) {}

  async changePassword(
    body: ChangePasswordDto,
    codigo?: string | null,
  ): Promise<void> {
    if (!codigo)
      throw new ForbiddenException({
        message: 'acesso não autorizado.',
        details: 'codigo de recuperacao não enviado no header.',
      });

    const user = await this.prismaService.recoveyCode.findFirst({
      where: { codigo },
      select: {
        userId: true,
        expireIn: true,
      },
    });

    if (!user)
      throw new ForbiddenException({
        message: 'acesso não autorizado.',
        details: 'codigo de recuperacao incorreto',
      });

    if (isAfter(new Date(), user.expireIn))
      throw new UnauthorizedException({
        message: 'acesso não autorizado.',
        details: 'codigo de recuperacao esta expirado.',
      });

    await this.prismaService.user.update({
      where: {
        id: user.userId,
      },
      data: {
        password: this.crypto.create(body.password),
      },
    });

    return;
  }

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

    if (!user || !this.crypto.compare(body.codigo, user.codigo || ''))
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
        userId: user.id,
        codigo: code,
        expireIn: add(new Date(), { minutes }),
      },
      update: {
        codigo: this.crypto.create(code),
        expireIn: add(new Date(), { minutes }),
      },
    });

    return {
      message: 'codigo enviado para o email com sucesso',
    };
  }

  async login(loginAuthDto: LoginAuthDto): Promise<Auth> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email: loginAuthDto.email,
      },
      include: {
        Image: true,
      },
    });

    if (!user || !this.crypto.compare(loginAuthDto.password, user.password))
      throw new UnauthorizedException('email ou senha invalido');

    if (user.suspended)
      throw new UnauthorizedException(
        'Sua conta está atualmente suspensa. Por favor, entre em contato com o administrador do sistema para obter assistência.',
      );

    const auth = new Auth();
    auth.user = user as any;
    auth.accessToken = this.tokenService.create({ id: user.id });
    auth.refreshToken = this.tokenService.generate();

    await this.prismaService.refreshToken.update({
      where: {
        userId: user.id,
      },
      data: {
        codigo: auth.refreshToken,
      },
    });

    return auth;
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
      data: {
        email: createAuthDto.email,
        password: createAuthDto.password,
      },
      select: {
        id: true,
      },
    });

    await this.prismaService.business.create({
      data: {
        name: 'Meu negócio',
        main: true,
        User: {
          connect: { id },
        },
      },
    });

    const codigo = this.tokenService.generate();

    const item = await this.prismaService.refreshToken.create({
      data: {
        codigo,
        userId: id,
      },
    });
    console.log(item);
  }
}
