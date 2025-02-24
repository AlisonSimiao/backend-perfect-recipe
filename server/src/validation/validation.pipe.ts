/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  UnprocessableEntityException,
  InternalServerErrorException,
} from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    try {
      if (!value) {
        throw new UnprocessableEntityException('Nenhum dado fornecido');
      }

      if (!metatype || !this.toValidate(metatype)) {
        return value;
      }

      const object = plainToInstance(metatype, value);
      const errors = await validate(object);
      if (errors.length > 0) {
        throw new UnprocessableEntityException(this.buildResponse(errors));
      }

      return value;
    } catch (err) {
      if (err instanceof UnprocessableEntityException) throw err;

      throw new InternalServerErrorException();
    }
  }

  private buildResponse(errors: ValidationError[]) {
    return errors.reduce<{ [x: string]: string[] }>((acc, error) => {
      acc[error.property] = Object.values(error.constraints || {});

      return acc;
    }, {});
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
