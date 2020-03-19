import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/states/dashboard/dashboard.service';

@Component({
  selector: 'app-location-status',
  templateUrl: './location-status.component.html',
  styleUrls: ['./location-status.component.scss'],
})
export class LocationStatusComponent implements OnInit {
  conditions: any[];
  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.service.getCasesByPostalCode('4200-192').subscribe(res => {
      this.conditions = res[0];
    });
  }
}
