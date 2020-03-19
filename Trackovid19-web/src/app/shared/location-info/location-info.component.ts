import { Component, OnInit } from '@angular/core';
import { DashboardStore } from 'src/app/states/dashboard/dashboard.store';
import { DashboardQuery } from 'src/app/states/dashboard/dashboard.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss'],
})
export class LocationInfoComponent implements OnInit {
  count$: Observable<number>;
  constructor(private query: DashboardQuery) {}

  ngOnInit(): void {
   this.count$ = this.query.selectCount()
  }
}
