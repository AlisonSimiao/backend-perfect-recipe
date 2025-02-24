import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Req,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Auth } from './entities/auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @HttpCode(201)
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('/login')
  login(@Body() loginAuthDto: LoginAuthDto): Promise<Auth> {
    return this.authService.login(loginAuthDto);
  }

  @Get('refresh-token')
  @HttpCode(200)
  refreshToken(@Req() req: Request): Promise<Auth> {
    const refreshToken: string = req.headers['refresh-token'] || '';

    return this.authService.refreshToken(refreshToken);
  }
}
