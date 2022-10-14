import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { json } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

morgan.token('body', (req) => {
  return JSON.stringify(req['body']);
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('OHS API example')
    .setDescription('The APIs description supported by OHS')
    .setVersion('1.0')
    .addTag('ohs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.use(json());
  app.use(
    morgan(':method :url :body', {
      immediate: true,
    }),
  );

  await app.listen(4000);
}
bootstrap();
