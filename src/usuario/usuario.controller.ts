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
  Post,
  Param,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { FilterUserDto } from './dto/filter-user.dto';
import { handlePaginateQuery } from 'src/utils/fn';
import { AdminGuard } from 'src/admin/admin.guard';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { ERoleUser } from '@prisma/client';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'paginação usuario' })
  @ApiResponse({
    status: 200,
    schema: {
      type: 'object',
      properties: {
        dados: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              suspended: { type: 'string' },
              name: { type: 'string' },
              role: { enum: [ERoleUser.ADMIN, ERoleUser.USER] },
            },
          },
        },
        totalPaginas: {
          type: 'number',
        },
        pagina: {
          type: 'number',
        },
        registros: {
          type: 'number',
        },
      },
    },
  })
  @UseGuards(AdminGuard)
  async paginate(@Query() query: FilterUserDto) {
    const filters = handlePaginateQuery(query);

    return this.usuarioService.paginate(filters);
  }

  @Patch()
  @ApiOperation({ summary: 'atualiza usuario' })
  @UseInterceptors(FileInterceptor('file'))
  update(
    @Req() req: Request,
    @Body() body: UpdateUsuarioDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usuarioService.update(req['idUser'], body, file);
  }

  @Patch('/reset-password/:email')
  @HttpCode(204)
  @ApiParam({
    type: String,
    name: 'email',
  })
  @ApiOperation({ summary: 'reseta senha para default' })
  @UseGuards(AdminGuard)
  resetsenha(@Param() email: string) {
    return this.usuarioService.resetPassword(email);
  }

  @Post('/suspend/:email')
  @HttpCode(204)
  @UseGuards(AdminGuard)
  @ApiParam({
    type: String,
    name: 'email',
  })
  @ApiOperation({ summary: 'Toggle para suspenção' })
  suspender(@Param() email: string) {
    return this.usuarioService.suspend(email);
  }
}
