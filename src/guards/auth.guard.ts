import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly bearerAuthHeader = 'Bearer';

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const authorizationHeader = request.headers.authorization;
    if (!authorizationHeader) {
      throw new HttpException('Authorization header must be present', HttpStatus.UNAUTHORIZED);
    }

    if (authorizationHeader.split(' ')[0] !== this.bearerAuthHeader) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }

    const token = authorizationHeader.split(' ')[1];

    try {
      const decoded: any = jwt.verify(token, process.env.SECRET);

      request.user = decoded;
    } catch (err) {
      const message = `Token error: ${err.message || err.name}`;
      throw new HttpException(message, HttpStatus.UNAUTHORIZED);
    }

    return true;
  }
}
