import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import {GeolocalizationService} from './shared/services/geolocalization.service';
import { SwUpdate } from '@angular/service-worker';
import { NotificationService } from './shared/services/notification-service.service';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // geolocalizationService: GeolocalizationService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document,
    private swUpdate: SwUpdate,
    private notificationService: NotificationService,
  ) {
    // geolocalizationService.geoFindMe()

    // Init Facebook SDK
    const s = this.renderer2.createElement('script');
    s.src = `https://connect.facebook.net/pt_PT/sdk.js#version=v6.0&appId=${environment.facebookAPI}&xfbml=true&autoLogAppEvents=true`;
    this.renderer2.setProperty(s, 'async', 'true');
    this.renderer2.setProperty(s, 'defer', 'true');

    this.renderer2.appendChild(this._document.body, s);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // TODO: Check if we want to go with this or not
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
}
