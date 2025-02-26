import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class RecoveryDto {
  @ApiProperty({
    required: true,
    type: 'string',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
