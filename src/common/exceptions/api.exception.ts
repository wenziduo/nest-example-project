import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiErrorCode } from '../enums/api-error-code.enum';

export class ApiException extends HttpException {
  private errorMessage: string;
  private errorCode: ApiErrorCode;

  constructor(
    errorMessage: any,
    errorCode: ApiErrorCode,
    statusCode: HttpStatus,
  ) {
    super(errorMessage, statusCode);

    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
  }

  getErrorCode(): ApiErrorCode {
    return this.errorCode;
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }
}
