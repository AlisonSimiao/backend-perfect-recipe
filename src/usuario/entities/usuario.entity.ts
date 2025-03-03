import { ApiProperty } from '@nestjs/swagger';
import { ERoleUser } from '@prisma/client';
import { Image } from 'src/image/entities/image.entity';

export class Usuario {
  @ApiProperty({
    type: 'string',
  })
  name: string;

  @ApiProperty({
    type: 'string',
  })
  id: string;

  @ApiProperty({
    type: 'string',
  })
  nickname: string;

  @ApiProperty({
    type: 'string',
  })
  email: string;

  @ApiProperty({
    type: 'string',
  })
  password: string;

  @ApiProperty({
    type: 'boolean',
  })
  requiresPassChange: boolean;

  @ApiProperty({
    type: 'boolean',
  })
  suspended: boolean;

  @ApiProperty({
    enum: [ERoleUser.ADMIN, ERoleUser.USER],
  })
  role: ERoleUser;

  @ApiProperty({
    type: 'string',
  })
  imageId: string;

  @ApiProperty()
  Image?: Image;
}
