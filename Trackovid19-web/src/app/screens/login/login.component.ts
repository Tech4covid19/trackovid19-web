import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/state/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {}

  onFacebookLogin() {
    this.usersService.login();
  }
}
