import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private usersService: UserService) {}

  ngOnInit(): void {}

  onFacebookLogin() {
    this.usersService.login();
  }
}
