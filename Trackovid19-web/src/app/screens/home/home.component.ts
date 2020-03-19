import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';
import { GeolocalizationService } from 'src/app/shared/services/geolocalization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private service: UserService, private localizeService: GeolocalizationService) {}

  ngOnInit(): void {
    this.localizeService.geoFindMe();
  }
}
