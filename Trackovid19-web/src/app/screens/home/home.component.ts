import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/states/dashboard/dashboard.service';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { User } from 'src/app/states/user/state/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private userQuery: UserQuery,
    private dashboardService: DashboardService,
  ) {}

  ngOnInit(): void {
    //this.localizeService.geoFindMe();
    this.verifyCode();

    const id = this.userQuery.getActiveId();
    const user = this.userQuery.getEntity(id);
    this.dashboardService.getCasesByPostalCodeConditions(user.postalcode).subscribe(res => {});
    this.dashboardService.getCasesByPostalCodeConfinements(user.postalcode).subscribe(res => {});
  }

  verifyCode(): void {
    const id = this.userQuery.getActiveId();
    const user: User = this.userQuery.getEntity(id);

    if (user?.postalcode && user.postalcode === '0000-000') {
      this.router.navigate(['post-code-step']);
    }
  }
}
