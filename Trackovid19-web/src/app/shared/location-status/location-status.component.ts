import { Component, OnInit } from '@angular/core';
import { DashboardQuery } from 'src/app/states/dashboard/dashboard.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location-status',
  templateUrl: './location-status.component.html',
  styleUrls: ['./location-status.component.scss'],
})
export class LocationStatusComponent implements OnInit {
  conditions$: Observable<any[]>;

  constructor(private dashboardQuery: DashboardQuery) {
    this.conditions$ = this.dashboardQuery.selectFirst(state => state.conditions);
  }

  ngOnInit(): void {}
}
