import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport'
import { SteamStrategy } from './steam.strategy'
import { SessionSerializer } from './session.serializer'

@Module({
  imports: [PassportModule.register({session: true})],
  controllers: [AuthController],
  providers: [AuthService, SteamStrategy, SessionSerializer]
})
export class AuthModule {}
