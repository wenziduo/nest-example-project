import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DogService } from './dog.service';

@ApiTags('dog')
@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get('find')
  find(): any {
    return this.dogService.find();
  }
  @Get('getList')
  getList(@Query('name') name: string): string {
    return this.dogService.getList(name);
  }
}
