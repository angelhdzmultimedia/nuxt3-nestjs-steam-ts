import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { INestApplication } from '@nestjs/common'
import { configApp } from './config-app'

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule)
  configApp(app)
  await app.listen(5000);
}
bootstrap();
