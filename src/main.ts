import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3000/react-axios',
      'http://localhost:3001',
      'http://localhost:3002',
      'http://192.168.1.41:3002'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
