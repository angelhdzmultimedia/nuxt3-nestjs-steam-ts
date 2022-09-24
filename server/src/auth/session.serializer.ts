import { PassportSerializer } from '@nestjs/passport'

export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void) {
    done(null, user)
  }

  deserializeUser(payload: any, done: (err: Error, payload: string | boolean) => void) {
    if (payload) {
      return done(null, payload)
    }
    return done(null, false)
  }
}