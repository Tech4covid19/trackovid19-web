import { Component, OnInit } from '@angular/core';
import { DashboardQuery } from 'src/app/states/dashboard/dashboard.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-isolation-status',
  templateUrl: './isolation-status.component.html',
  styleUrls: ['./isolation-status.component.scss'],
})
export class IsolationStatusComponent implements OnInit {
  conditions: any[];
  confinements$: Observable<any[]>;

  constructor(private dashboardQuery: DashboardQuery) {
    this.confinements$ = this.dashboardQuery.selectFirst(state => state.confinements);
  }

  ngOnInit(): void {}
}
