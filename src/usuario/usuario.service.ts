import { Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageService } from 'src/image/image.service';
import { FilterUserDto } from './dto/filter-user.dto';
import { paginateResponse } from 'src/utils/fn';
import { ERoleUser } from '@prisma/client';

@Injectable()
export class UsuarioService {
  constructor(
    private prismaService: PrismaService,
    private imageService: ImageService,
  ) {}

  async update(
    idUser: string,
    updateUsuarioDto: UpdateUsuarioDto,
    file: Express.Multer.File,
  ) {
    const imageId = file && (await this.imageService.upload(file));

    await this.prismaService.user.update({
      where: {
        id: idUser,
      },
      data: {
        ...updateUsuarioDto,
        ...(imageId && { imageId }),
      },
    });

    return this.prismaService.image.create({
      data: {
        data: file.buffer,
        description: file.mimetype,
        name: file.originalname,
      },
    });
  }

  async paginate(filters: FilterUserDto) {
    const where = {
      suspended: filters.suspended,
      role: ERoleUser.USER,
    };

    const data = await this.prismaService.user.findMany({
      where,
      select: {
        id: true,
        name: true,
        suspended: true,
        role: true,
      },
      skip: ((filters.page || 1) - 1) * (filters.offset || 1),
      take: filters.offset,
    });

    const totalRegistros = await this.prismaService.user.count({
      where,
    });

    return paginateResponse(data, totalRegistros, filters.offset, filters.page);
  }
}
