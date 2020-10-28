import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './dog/dog.module';
import { CatModule } from './cat/cat.module';
import { AdminModule } from './admin/admin.module';
import { AdminnService } from './adminn/adminn.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'caiwenduo@1993',
      database: 'nest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DogModule,
    CatModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService, AdminnService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
