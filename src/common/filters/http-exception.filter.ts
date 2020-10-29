import * as moment from 'moment';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    if (exception instanceof ApiException) {
      response.status(status).json({
        errorCode: exception.getErrorCode(),
        errorMessage: exception.getErrorMessage(),
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        path: request.url,
      });
    } else {
      response.status(status).json({
        statusCode: status,
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
        path: request.url,
      });
    }
  }
}
