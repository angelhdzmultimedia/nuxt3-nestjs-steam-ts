import { Controller, UseGuards, Request, Get, Redirect} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthenticatedGuard } from './authenticated.guard'
import { SteamAuthGuard } from './steam-auth.guard'


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Get('steam/login')
  @UseGuards(SteamAuthGuard)
  public steam() {/**/}

  @Get('steam/return')
  @UseGuards(SteamAuthGuard)
  @Redirect('http://localhost:3000/profile')
  public steamReturn(@Request() req) {
    console.log(`[AuthController.steamReturn][req.user]: ${req.user}}`);
    
  }

  @UseGuards(AuthenticatedGuard)
  @Get('profile')
  public profile(@Request() req) {
    console.log(`[/auth/profile USER]: ${JSON.stringify(req.user)}`)
    return req.user
  }
}
