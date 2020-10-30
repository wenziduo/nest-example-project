import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  UsePipes,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CatService } from './cat.service';
import { CreateCatDto } from './create-cat.dto';
import { JoiValidationPipe } from './JoiValidationPipe';
import { ValidationPipe } from '../utils/ValidationPipe';
import { RbacInterceptor } from '../utils/interceptor/rbac.interceptor';
import { object, string, number } from '@hapi/joi';

const createCatSchema = object({
  name: string().required(),
  age: number().required(),
});

@ApiTags('cat')
@ApiBearerAuth() // Swagger 的 JWT 验证
@Controller('cat')
export class CatController {
  constructor(private readonly CatService: CatService) {}
  @Get('find')
  find(): any {
    return this.CatService.find();
  }
  @Post('getList')
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  @UseInterceptors(new RbacInterceptor(3))
  getList(@Body(new ValidationPipe()) createCatDto: CreateCatDto): string {
    console.log('createCatDto', createCatDto);
    return this.CatService.getList(createCatDto);
  }
}
