import { ApiProperty } from '@nestjs/swagger';

export class Image {
  @ApiProperty({
    required: true,
    type: 'string',
  })
  id: string;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  name: string;

  @ApiProperty({
    description: 'Dados binários do arquivo',
    type: 'string',
    format: 'binary',
  })
  data: Buffer;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  description: string;
}
