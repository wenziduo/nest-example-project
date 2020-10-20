import { Injectable, HttpStatus } from '@nestjs/common';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';

@Injectable()
export class DogService {
  getList(name: string): string {
    if (name === '蔡雯多') {
      throw new ApiException(
        '用户ID无效',
        ApiErrorCode.USER_ID_INVALID,
        HttpStatus.BAD_REQUEST,
      );
    }
    return '哈哈哈' + name;
  }
}
