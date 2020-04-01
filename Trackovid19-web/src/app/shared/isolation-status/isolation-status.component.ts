import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/states/dashboard/dashboard.service';
import { UserQuery } from 'src/app/states/user/state/user.query';

@Component({
  selector: 'app-isolation-status',
  templateUrl: './isolation-status.component.html',
  styleUrls: ['./isolation-status.component.scss'],
})
export class IsolationStatusComponent implements OnInit {
  conditions: any[];

  constructor(private service: DashboardService, private query: UserQuery) {}

  ngOnInit(): void {
    const id = this.query.getActiveId();
    const user = this.query.getEntity(id);
    this.service.getCasesByPostalCode(user.postalcode).subscribe(res => {
      this.conditions = res[1];
    });
  }
}
