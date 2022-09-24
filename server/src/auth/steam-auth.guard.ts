import {  ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class SteamAuthGuard extends AuthGuard('steam') {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean 
    console.log(`[SteamAuthGuard CanActivate Result]: $`)
    const request = context.switchToHttp().getRequest()
    await super.logIn(request)
    return result
  }
}
