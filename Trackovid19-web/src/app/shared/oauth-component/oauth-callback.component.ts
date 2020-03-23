import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../../states/user/state/user.service';
import { User } from '../../states/user/state/user.model';

@Component({
  template: '',
})
export class OauthCallbackComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.authService.authenticate(params.code);
      this.verifyCode();
    });
  }

  verifyCode(): void {
    this.userService.getUser().subscribe(user => {
      localStorage.setItem('gdpr', JSON.stringify(this.verifyTerms(user)));
      if (user && user.postalcode && user.postalcode !== '0000-000') {
        const url = this.verifyTerms(user) ? '/dashboard' : '/privacy-terms';
        this.router.navigate([url]);
      } else {
        this.router.navigate(['post-code-step']);
      }
    });
  }

  verifyTerms(user: Partial<User>) {
    return (
      user.hasOwnProperty('optin_download_use') &&
      user.hasOwnProperty('optin_health_geo') &&
      user.hasOwnProperty('optin_privacy') &&
      user.hasOwnProperty('optin_push') &&
      user.optin_download_use &&
      user.optin_health_geo &&
      user.optin_privacy &&
      user.optin_push
    );
  }
}
