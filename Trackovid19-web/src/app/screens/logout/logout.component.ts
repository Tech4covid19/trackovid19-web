import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/states/user/state/user.service';
import { environment } from 'src/environments/environment';

@Component({
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(private usersService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.usersService.logout();
    this.router.navigateByUrl('');
  }
}
