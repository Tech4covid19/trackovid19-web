import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/state/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

  onFacebookLogin() {
    this.usersService.login();
  }

  private _nextPage() {
    this.router.navigate(['/intro-steps'], { relativeTo: this.activatedRoute});
  }
}
