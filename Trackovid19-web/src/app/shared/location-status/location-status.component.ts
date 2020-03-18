import { Component, OnInit } from '@angular/core';
import { CaseService } from 'src/app/states/case/state/case.service';

@Component({
  selector: 'app-location-status',
  templateUrl: './location-status.component.html',
  styleUrls: ['./location-status.component.scss'],
})
export class LocationStatusComponent implements OnInit {
  constructor(private service: CaseService) {}

  ngOnInit(): void {
    this.service.get().subscribe(res => console.log(res))
  }
}
