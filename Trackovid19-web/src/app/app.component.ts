import { Component } from '@angular/core';
import { GeolocalizationService } from './shared/services/geolocalization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trackovid19-web';
  constructor(geolocalizationService: GeolocalizationService) {
   // geolocalizationService.geoFindMe()
  }
}
