import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      console.log('error', error);
      //   throw new BadRequestException('Validation failed');
      throw new ApiException(
        error.details.map(item => item.message).join('；'),
        ApiErrorCode.USER_ID_INVALID,
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }
}
