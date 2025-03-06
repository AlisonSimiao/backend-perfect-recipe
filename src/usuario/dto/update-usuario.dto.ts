import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUsuarioDto {
  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  nickname: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: 'string',
  })
  @IsOptional()
  @IsString()
  password: string;
}
