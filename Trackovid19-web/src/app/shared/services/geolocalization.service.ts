import { Injectable } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';
import { HttpClient } from '@angular/common/http';
import { UserStore } from 'src/app/states/user/state/user.store';
import { UserQuery } from 'src/app/states/user/state/user.query';

@Injectable({
  providedIn: 'root',
})
export class GeolocalizationService {
  target = {
    latitude: 0,
    longitude: 0,
  };

  options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };
  constructor(
    private usersService: UserService,
    private http: HttpClient,
    private userStore: UserStore,
    private query: UserQuery,
  ) {}

  geoFindMe() {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
      console.log('Locating…');
      navigator.geolocation.getCurrentPosition(success, this.error);
      let that = this;
      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const geolocation = { geo: { lat: latitude, lon: longitude } };
        that.http
          .get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
          )
          .subscribe((data: any) => {
            console.log(data.address);
            const id = that.query.getActiveId();
            that.userStore.update(id, state => {
              (state.postalcode = data.address.postcode), (state.county = data.address.county);
            });
          });

        that.usersService.updateUserLocation(geolocation);
      }
      //navigator.geolocation.watchPosition(this.success, this.error, this.options);
    }
  }

  error() {
    alert('Unable to retrieve your location');
  }
}
