import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-view.html',
  styleUrls: ['./login-view.scss']
})
export class LoginViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFacebookLogin() {
    this.router.navigate(['']);
  }

  showTerms() {
      return;
  }

}
