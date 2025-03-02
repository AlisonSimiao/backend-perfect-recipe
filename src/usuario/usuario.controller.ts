import {
  Controller,
  Body,
  Patch,
  UseInterceptors,
  UploadedFile,
  Req,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Patch()
  @UseInterceptors(FileInterceptor('file'))
  update(
    @Req() req: Request,
    @Body() body: UpdateUsuarioDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usuarioService.update(req['idUser'], body, file);
  }
}
