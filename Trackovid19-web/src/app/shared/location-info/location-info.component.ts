import { Component, OnInit } from '@angular/core';
import { DashboardQuery } from 'src/app/states/dashboard/dashboard.query';
import { DashboardService } from 'src/app/states/dashboard/dashboard.service';
import { Observable } from 'rxjs';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss'],
})
export class LocationInfoComponent implements OnInit {
  count: number;
  postalCode$: Observable<any>;
  county$: Observable<any>;
  constructor(
    private query: DashboardQuery,
    private userQuery: UserQuery,
    private service: DashboardService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.count = 0;

    const id = this.userQuery.getActiveId();
    const user = this.userQuery.getEntity(id);
    this.service.getCasesByPostalCode(user.postalcode).subscribe(res => {
      this.count = res[1].reduce((total, d) => total + parseInt(d.hits, 10), 0);
    });
    this.postalCode$ = this.userQuery.selectActive(entity => {
      return entity.postalcode.slice(0, -4); // Get just the first 4 digits
    });
    this.county$ = this.userQuery.selectActive(entity => entity.county);
  }

  updatePostCode() {
    this.router.navigate(['post-code-step']);
  }
}
