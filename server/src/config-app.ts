import { INestApplication } from '@nestjs/common';
import * as session from 'express-session'
import * as passport from 'passport'

export const configApp = (app: INestApplication) => {
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
}