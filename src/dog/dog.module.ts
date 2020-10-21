import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { Dog } from './dog.entity';

@Module({
  controllers: [DogController],
  providers: [DogService],
  imports: [TypeOrmModule.forFeature([Dog])],
})
export class DogModule {}
