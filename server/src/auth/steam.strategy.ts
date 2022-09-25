import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-steam'
import { PassportStrategy } from '@nestjs/passport'

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor() {
    super({
      returnURL: 'http://localhost:5000/api/auth/steam/return',
      realm: 'http://localhost:5000/',
      apiKey: 'C20F41E0DE4D061530CF6DF6B04AABC7',
    })
  } 

  public validate(identifier: any, profile: any, done: (error: Error, profile: any) => void) {
    profile.identifier = identifier
    done(null, profile)
    return profile
  }
 
}
