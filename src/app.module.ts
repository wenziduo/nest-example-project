import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './controller/cats/cats.controller';
import { CatsModule } from './module/cats/cats.module';
import { CatsService } from './service/cats/cats.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
