import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    return this.checkIfUserIsAuthenticated();
  }

  canActivateChild(): boolean {
    return this.checkIfUserIsAuthenticated();
  }

  canLoad(): boolean {
    return this.checkIfUserIsAuthenticated();
  }

  checkIfUserIsAuthenticated(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
