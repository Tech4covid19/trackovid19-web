import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { UserService } from 'src/app/states/user/state/user.service';

@Injectable()
export class UserResolver implements Resolve<any> {
  constructor(private usersService: UsersService, private authServicce: AuthService) {}

  resolve(): Observable<any> {
    if (!this.authServicce.isAuthenticated()) {
      return of(null);
    }
    return this.usersService.getUser();
  }
}
