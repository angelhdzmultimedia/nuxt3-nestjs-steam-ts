import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-steam'
import { PassportStrategy } from '@nestjs/passport'

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor() {
    super({
      returnURL: 'http://localhost:5000/api/auth/steam/return',
      realm: 'http://localhost:5000/',
      apiKey: 'A22DD3A4EAFCEBB2D9F8039B96B35D1A',
    })
  } 

  public validate(identifier: any, profile: any) {
    profile.identifier = identifier
    return profile
  }
}
