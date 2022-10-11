import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { json } from 'express';

morgan.token('body', (req) => {
  return JSON.stringify(req['body']);
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
