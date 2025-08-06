import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { values } from '@repo/shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(values);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
