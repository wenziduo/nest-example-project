import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';

@Module({
  controllers: [CatController],
  providers: [CatService],
  imports: [TypeOrmModule.forFeature([Cat])],
})
export class CatModule {}
