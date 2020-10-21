import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatService } from './cat.service';

@ApiTags('Cat')
@Controller('Cat')
export class CatController {
  constructor(private readonly CatService: CatService) {}
  @Get('find')
  find(): any {
    return this.CatService.find();
  }
  @Get('getList')
  getList(@Query('name') name: string): string {
    console.log('name', name);
    return this.CatService.getList(name);
  }
}
