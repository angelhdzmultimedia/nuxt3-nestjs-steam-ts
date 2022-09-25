import {  ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import * as passport from 'passport'

@Injectable()
export class SteamAuthGuard extends AuthGuard('steam') {
  private defaultOptions = {
    session: true,
    property: 'user',
    callback: (err, user) => {
        if (err || !user) {
            throw err || new UnauthorizedException()
        }
        return user
    }
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const options = { ...this.defaultOptions }
    const httpContext = context.switchToHttp()
    const [request, response] = [
        httpContext.getRequest(),
        httpContext.getResponse()
    ]
    const passportFn = this.createPassportContext(request, response)
    const user = await passportFn(
        'steam',
        options
    )
    if (user) {
        request.login(user)
    }
    return true
  }

  private createPassportContext(request, response) { 
    return (type, options) => {
      return new Promise((resolve, reject) =>
          passport.authenticate(type, options, (err, user, info) => {
              try {
                  return resolve(options.callback(err, user, info))
              } catch (err) {
                  reject(err)
              }
          })(request, response, resolve)
      )
    }
  }
}


