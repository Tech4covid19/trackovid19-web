import { Component, Renderer2, Inject } from '@angular/core';
import { GeolocalizationService } from './shared/services/geolocalization.service';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Trackovid19-web';
  constructor(
    geolocalizationService: GeolocalizationService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document,
  ) {
    //geolocalizationService.geoFindMe()

    // Init Facebook SDK
    const s = this.renderer2.createElement('script');
    s.text = `window.fbAsyncInit = () => {
      FB.init({
        appId: ${environment.facebookAPI},
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v6.0',
      });
    };`;
    this.renderer2.appendChild(this._document.body, s);
  }
}
