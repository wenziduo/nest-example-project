import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ObjectSchema } from '@hapi/joi';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';
type valueType = any;

@Injectable()
export class ValidationPipe implements PipeTransform<valueType> {
  async transform(
    value: valueType,
    { metatype }: ArgumentMetadata,
  ): Promise<valueType> {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new ApiException(
        errors.map(
          item =>
            `[属性名称：${item.property}，属性值：${
              item.value
            }，错误文案：${JSON.stringify(item.constraints)}]`,
        ),
        ApiErrorCode.USER_ID_INVALID,
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
