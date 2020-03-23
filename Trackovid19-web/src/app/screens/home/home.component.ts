import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';
import { GeolocalizationService } from 'src/app/shared/services/geolocalization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private localizeService: GeolocalizationService,
  ) {}

  ngOnInit(): void {
    //this.localizeService.geoFindMe();
    this.verifyCode();
  }

  verifyCode(): void {
    this.userService.getUser().subscribe(user => {
      if (user && user.postalcode && user.postalcode === '0000-000') {
        this.router.navigate(['post-code-step']);
      }
    });
  }
}
