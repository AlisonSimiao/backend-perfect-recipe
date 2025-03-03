import {
  Controller,
  Body,
  Patch,
  UseInterceptors,
  UploadedFile,
  Req,
  Get,
  HttpCode,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { FilterUserDto } from './dto/filter-user.dto';
import { handlePaginateQuery } from 'src/utils/fn';
import { AdminGuard } from 'src/admin/admin.guard';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @HttpCode(200)
  @UseGuards(AdminGuard)
  async paginate(@Query() query: FilterUserDto) {
    const filters = handlePaginateQuery(query);

    return this.usuarioService.paginate(filters);
  }

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
