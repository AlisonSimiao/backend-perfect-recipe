import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
  constructor(private prismaService: PrismaService) {}

  async upload(file: Express.Multer.File) {
    const image = await this.prismaService.image.create({
      data: {
        data: file.buffer,
        name: file.originalname,
        description: file.mimetype,
      },
    });

    return image.id;
  }
}
