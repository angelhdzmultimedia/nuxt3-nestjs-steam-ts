import { Controller, UseGuards, Request, Get, Redirect } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthenticatedGuard } from './authenticated.guard'
import { SteamAuthGuard } from './steam-auth.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Get('steam')
  @UseGuards(SteamAuthGuard)
  public steam(@Request() req) {
   console.log(`[/auth/steam USER]: ${JSON.stringify(req.user)}`)
   return req.user
  }

  @Get('steam/return')
  @Redirect('http://localhost:3000/profile')
  public steamReturn(@Request() req) {
    console.log(`[/auth/steam/return USER]: ${JSON.stringify(req.user)}`)
  }


  @UseGuards(AuthenticatedGuard)
  @Get('profile')
  public profile(@Request() req) {
    console.log(`[/auth/profile USER]: ${JSON.stringify(req.user)}`)
    return req.user
  }
}
