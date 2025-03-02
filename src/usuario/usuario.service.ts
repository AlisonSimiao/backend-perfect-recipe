import { Injectable } from '@nestjs/common';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ImageService } from 'src/image/image.service';

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
}
