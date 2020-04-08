import { Injectable } from '@angular/core';

export enum LoginMethod {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}

@Injectable({ providedIn: 'root' })
export class LocalStorageHelper {
  setLoginMethod(loginMethod: LoginMethod) {
    localStorage.setItem('loginmethod', loginMethod);
  }

  getLoginMethod(): LoginMethod {
    const method = localStorage.getItem('loginmethod');
    if (method) {
      return LoginMethod[method.toUpperCase()];
    }
    return undefined;
  }

  setShareStatus(shareStatus: string) {
    localStorage.setItem('share', shareStatus);
  }

  getShareStatus(): string {
    return localStorage.getItem('share');
  }

  setGDPR(gdpr: string) {
    localStorage.setItem('gdpr', gdpr);
  }

  getGDPR(): string {
    return localStorage.getItem('gdpr');
  }

  clear() {
    localStorage.clear();
  }
}
