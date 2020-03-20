import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../../states/user/state/user.service';

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
      if (user && user.postalcode && user.postalcode !== '0000-000') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['post-code-step']);
      }
    });
  }
}
