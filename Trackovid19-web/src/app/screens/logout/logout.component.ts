import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/states/user/state/user.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(
    private usersService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authService.unauthenticate();
    this.usersService.logout();
    this.router.navigateByUrl('/login');
  }
}
