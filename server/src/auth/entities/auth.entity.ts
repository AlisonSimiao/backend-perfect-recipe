import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from 'src/usuario/entities/usuario.entity';

export class Auth {
  @ApiProperty({
    required: true,
  })
  user: Usuario;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  accessToken: string;

  @ApiProperty({
    required: true,
    type: 'string',
  })
  refreshToken: string;
}
