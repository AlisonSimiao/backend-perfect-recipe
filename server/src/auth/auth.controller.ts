import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Req,
  HttpCode,
  Patch,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Auth } from './entities/auth.entity';
import { RecoveryDto } from './dto/repovery.dto';
import { VerifyRecoveryCodeDto } from './dto/verify-recovery-code.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import {
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @HttpCode(201)
  @ApiCreatedResponse({})
  @ApiConflictResponse({})
  @ApiOperation({ summary: 'criação de usuário' })
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('/login')
  @ApiOperation({ summary: 'Login de usuário' })
  @ApiBody({ type: LoginAuthDto }) // Define o tipo do corpo da requisição
  @ApiResponse({
    status: 200,
    description: 'Token de autenticação gerado com sucesso',
    type: Auth,
  }) // Define a resposta esperada
  async login(@Body() loginAuthDto: LoginAuthDto): Promise<Auth> {
    return this.authService.login(loginAuthDto);
  }

  @Patch('/change-password')
  @HttpCode(200)
  @ApiOperation({ summary: 'muda senha de usuário' })
  @ApiHeader({
    required: true,
    name: 'codigo',
  })
  @ApiBody({
    type: ChangePasswordDto,
  })
  changePassword(@Body() body: ChangePasswordDto, @Req() req: Request) {
    const codigo = req.headers['codigo'];

    return this.authService.changePassword(body, codigo);
  }

  @Post('/verify-recovery-code')
  @HttpCode(200)
  @ApiBody({
    type: VerifyRecoveryCodeDto,
  })
  verifyRecoveryCode(@Body() body: VerifyRecoveryCodeDto) {
    return this.authService.verifyRecoveryCode(body);
  }

  @Post('/recovery-code')
  @HttpCode(201)
  @ApiBody({
    type: RecoveryDto,
  })
  @ApiOperation({ summary: 'Envia código de verificação para o email' }) // Descrição do endpoint
  @ApiResponse({
    status: 200,
    description: 'Código enviado com sucesso', // Define o tipo da resposta
  })
  sendRecoveryCode(@Body() body: RecoveryDto) {
    return this.authService.sendRecoveryCode(body);
  }

  @Get('refresh-token')
  @HttpCode(200)
  @ApiHeader({
    required: true,
    name: 'refresh-token',
  })
  @ApiResponse({
    status: 200,
    description: 'Código enviado com sucesso',
    type: Auth,
  })
  @ApiOperation({ summary: 'gera novo token de acesso' })
  refreshToken(@Req() req: Request): Promise<Auth> {
    const refreshToken: string = req.headers['refresh-token'] || '';

    return this.authService.refreshToken(refreshToken);
  }
}
