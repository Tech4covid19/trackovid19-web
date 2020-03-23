import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  acceptedTerms = false;

  constructor(
    private usersService: UserService,
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onFacebookLogin() {
    if (this.acceptedTerms) {
      this.usersService.login();
    }
  }
}
