import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/states/dashboard/dashboard.service';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { UserStore } from 'src/app/states/user/state/user.store';

@Component({
  selector: 'app-location-status',
  templateUrl: './location-status.component.html',
  styleUrls: ['./location-status.component.scss'],
})
export class LocationStatusComponent implements OnInit {
  conditions: any[];
  constructor(
    private service: DashboardService,
    private query: UserQuery,
    private store: UserStore,
  ) {}

  ngOnInit(): void {
    this.query.selectLoading().subscribe(loading => {
      if (!loading) {
        const id = this.query.getActiveId();
        const user = this.query.getEntity(id);

        this.service.getCasesByPostalCode(user.postalcode).subscribe(res => {
          this.conditions = res[0];
        });
      }
    });
  }
}
