import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class FilterUserDto {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  suspended?: boolean;

  @ApiProperty({
    required: false,
    default: 1,
    type: Number,
  })
  @IsOptional()
  page?: number;

  @ApiProperty({
    required: false,
    default: 5,
    type: Number,
  })
  @IsOptional()
  offset?: number;
}
