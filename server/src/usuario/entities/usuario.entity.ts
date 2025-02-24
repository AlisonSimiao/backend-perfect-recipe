import { ApiProperty } from '@nestjs/swagger';
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
  requiresPassChange: boolean | null;

  @ApiProperty({
    type: 'boolean',
  })
  suspended: boolean | null;

  @ApiProperty({
    type: 'string',
  })
  imageId: string;

  @ApiProperty()
  Image?: Image;
}
