import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class VerifyRecoveryCodeDto {
  @Length(4, 4)
  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
