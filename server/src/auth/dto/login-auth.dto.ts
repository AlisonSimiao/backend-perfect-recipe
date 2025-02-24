import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
  @ApiProperty({
    required: true,
    type: 'string',
  })
  email: string;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  password: string;
}
