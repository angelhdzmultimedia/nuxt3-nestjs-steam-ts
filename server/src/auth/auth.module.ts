import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport'
import { SteamStrategy } from './steam.strategy'
import { SessionSerializer } from './session.serializer'
import { SteamAuthGuard } from './steam-auth.guard'

@Module({
  imports: [PassportModule.register({session: true, defaultStrategy: 'steam'})],
  controllers: [AuthController],
  providers: [AuthService, SteamStrategy, SteamAuthGuard, SessionSerializer]
})
export class AuthModule {}
