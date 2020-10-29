import { Controller, Get, Query, Param, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatService } from './cat.service';
import { CreateCatDto } from './create-cat.dto';
import { JoiValidationPipe } from './JoiValidationPipe';
import { ValidationPipe } from '../utils/ValidationPipe';
import { object, string, number } from '@hapi/joi';

const createCatSchema = object({
  name: string().required(),
  age: number().required(),
});

@ApiTags('cat')
@Controller('cat')
export class CatController {
  constructor(private readonly CatService: CatService) {}
  @Get('find')
  find(): any {
    return this.CatService.find();
  }
  @Get('getList')
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  getList(@Query(new ValidationPipe()) createCatDto: CreateCatDto): string {
    console.log('createCatDto', createCatDto);
    return this.CatService.getList(createCatDto);
  }
}
