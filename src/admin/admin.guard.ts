import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ERoleUser } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return request['role'] === ERoleUser.ADMIN;
  }
}
