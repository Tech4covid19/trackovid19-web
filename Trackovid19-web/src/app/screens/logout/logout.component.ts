import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';
import { environment } from 'src/environments/environment';

@Component({
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(private usersService: UserService) {}

  ngOnInit(): void {
    this.usersService.login();
    window.location.href = environment.serverURL;
  }
}
