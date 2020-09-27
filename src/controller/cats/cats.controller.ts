import { Controller, Get } from '@nestjs/common';
import { CatsService } from '../../service/cats/cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getCats(): string {
        return this.catsService.getCats();
    }
}
