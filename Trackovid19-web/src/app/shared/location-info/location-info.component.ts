import { Component, OnInit } from '@angular/core';
import { DashboardStore } from 'src/app/states/dashboard/dashboard.store';
import { DashboardQuery } from 'src/app/states/dashboard/dashboard.query';
import { Observable } from 'rxjs';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss'],
})
export class LocationInfoComponent implements OnInit {
  count$: Observable<number>;
  postalCode$: Observable<any>;
  county$: Observable<any>;
  constructor(private query: DashboardQuery, private userQuery: UserQuery) {}

  ngOnInit(): void {
    this.count$ = this.query.selectCount();
    this.postalCode$ = this.userQuery.selectActive(entity => entity.postalcode);
    this.county$ = this.userQuery.selectActive(entity => entity.county);
  }
}
