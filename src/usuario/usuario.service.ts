import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageService } from 'src/image/image.service';
import { FilterUserDto } from './dto/filter-user.dto';
import { paginateResponse } from 'src/utils/fn';
import { ERoleUser } from '@prisma/client';
import { CryptoService } from 'src/crypto/crypto.service';

@Injectable()
export class UsuarioService {
  constructor(
    private prismaService: PrismaService,
    private imageService: ImageService,
    private crypto: CryptoService,
  ) {}

  async resetPassword(email: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    if (!user)
      throw new NotFoundException(
        `usuario com email '${email}' nao foi encontrado`,
      );

    await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: this.crypto.defaultPassword,
        requiresPassChange: true,
      },
    });
  }

  async suspend(email: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
      select: {
        suspended: true,
      },
    });

    if (!user)
      throw new NotFoundException(
        `usuario com email '${email}' nao foi encontrado`,
      );

    await this.prismaService.user.update({
      where: {
        email,
      },
      data: {
        suspended: !user.suspended,
      },
    });
  }

  async update(
    idUser: string,
    updateUsuarioDto: UpdateUsuarioDto,
    file?: Express.Multer.File,
  ) {
    const password =
      updateUsuarioDto.password &&
      this.crypto.create(updateUsuarioDto.password);

    const imageId = file && (await this.imageService.upload(file));

    await this.prismaService.user.update({
      where: {
        id: idUser,
      },
      data: {
        email: updateUsuarioDto.email,
        name: updateUsuarioDto.name,
        nickname: updateUsuarioDto.nickname,
        password,
        ...(imageId && { imageId }),
      },
    });

    if (file)
      await this.prismaService.image.create({
        data: {
          data: file?.buffer,
          description: file?.mimetype,
          name: file?.originalname,
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
