import { PassportSerializer } from '@nestjs/passport'

export class SessionSerializer extends PassportSerializer {
  constructor() {
    super()
    console.log('[SessionSerializer.constructor]')
  }

  public serializeUser(user: any, done: (err: Error, user: any) => void) {
    console.log('[SessionSerializer.serializeUser]')
    
    done(null, user)
  }

  public deserializeUser(payload: any, done: (err: Error, payload: string | boolean) => void) {
    console.log('[SessionSerializer.deserializeUser]')
    if (payload) {
      return done(null, payload)
    }
    return done(null, false)
  }
}