import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public unauthenticate() {
    sessionStorage.clear();
  }

  public authenticate(token: string) {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public isAuthenticated(): boolean {
    if (!this.getToken()) {
      return false;
    }
    return true;
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
}
