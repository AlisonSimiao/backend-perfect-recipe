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
    type: 'string', // No Swagger, use 'string' com formato 'binary'
    format: 'binary',
  })
  data: Buffer;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  description: string;
}
