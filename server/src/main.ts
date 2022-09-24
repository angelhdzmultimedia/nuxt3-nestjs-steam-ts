import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as session from 'express-session'
import * as passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://steamcommunity.com'],
    optionsSuccessStatus: 200,
  })
  app.setGlobalPrefix('api')
  app.use(session({
    secret: 'steam-secret-abc',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 360000}
  }))

  app.use(passport.initialize())
  app.use(passport.session())
  
  await app.listen(5000);
}
bootstrap();
