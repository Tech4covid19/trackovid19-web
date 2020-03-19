import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/states/dashboard/dashboard.service';

@Component({
  selector: 'app-isolation-status',
  templateUrl: './isolation-status.component.html',
  styleUrls: ['./isolation-status.component.scss']
})
export class IsolationStatusComponent implements OnInit {
  conditions: any[];

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getCasesByPostalCode('4200-192').subscribe(res => {
      this.conditions = res[1];
      console.log(res)
    })
  }

}
