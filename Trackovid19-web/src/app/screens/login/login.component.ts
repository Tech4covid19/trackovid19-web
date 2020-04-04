import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LocalStorageHelper, LoginMethod } from 'src/app/helpers/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  gdpr = false;
  acceptedTerms = false;
  loginMethod: LoginMethod;

  constructor(
    private usersService: UserService,
    private auth: AuthService,
    private router: Router,
    private localStorageHelper: LocalStorageHelper,
  ) {
    const gdpr = this.localStorageHelper.getGDPR();
    this.gdpr = gdpr !== null ? JSON.parse(gdpr) : false;
    this.acceptedTerms = this.gdpr === true;
    this.loginMethod = this.localStorageHelper.getLoginMethod();
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onFacebookLogin() {
    if (this.acceptedTerms) {
      this.usersService.loginFacebook();
    }
  }

  onGoogleLogin() {
    if (this.acceptedTerms) {
      this.usersService.loginGoogle();
    }
  }
}
