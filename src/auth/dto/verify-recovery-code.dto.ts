import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class VerifyRecoveryCodeDto {
  @ApiProperty({
    required: true,
  })
  @Length(4, 4)
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @ApiProperty({
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
