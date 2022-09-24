import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import {Strategy} from 'passport-steam'

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor() {
    super({
      returnURL: 'http://localhost:5000/api/auth/steam/return',
      realm: 'http://localhost:5000/',
      apiKey: 'C20F41E0DE4D061530CF6DF6B04AABC7',
    }, (identifier: any, profile: any, done: (error: Error, profile: any) => void) => {
      
      process.nextTick(() => {
        profile.identifier = identifier 
       done(null, profile)
      })
    })
  } 
}
