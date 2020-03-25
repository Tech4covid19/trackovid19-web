import { Component } from '@angular/core';
import { GeolocalizationService } from './shared/services/geolocalization.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Trackovid19-web';
  constructor(geolocalizationService: GeolocalizationService) {
    //geolocalizationService.geoFindMe()

    // Init Facebook SDK
    // @ts-ignore
    window.fbAsyncInit = () => {
      // @ts-ignore
      FB.init({
        appId: environment.facebookAPI,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v6.0',
      });
    };
  }
}
