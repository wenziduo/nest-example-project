import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';
import { CreateCatDto } from './create-cat.dto'
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private readonly CatRepository: Repository<Cat>,
  ) {}
  find(): any {
    return this.CatRepository.find();
  }
  getList(createCatDto: CreateCatDto): string {
    if (createCatDto.name === '蔡雯多') {
      throw new ApiException(
        '用户ID无效',
        ApiErrorCode.USER_ID_INVALID,
        HttpStatus.BAD_REQUEST,
      );
    }
    return '哈哈哈' + createCatDto.name;
  }
}
