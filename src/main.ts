import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    //下面两者结合组成请求基本路径
    // .setHost('http://localhost:3003')
    // .setBasePath('/api')
    .addTag('dog') // 分类
    .build();
  const document = SwaggerModule.createDocument(app, options);
  //指定文档路径
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3003);
}
bootstrap();
