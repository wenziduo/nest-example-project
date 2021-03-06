import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';
import { Dog } from './dog.entity';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog)
    private readonly DogRepository: Repository<Dog>,
  ) {}
  async find(): Promise<any> {
    const res = await this.DogRepository.find();
    console.log('res', res);
    return res;
  }
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
