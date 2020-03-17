import { Injectable } from '@angular/core';
import { UsersService } from 'src/app/state/users.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizationService {
  target = {
    latitude : 0,
    longitude: 0
  };
  
  options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };
  constructor(private usersService: UsersService) { }

  geoFindMe() {

    if (!navigator.geolocation) {
       alert('Geolocation is not supported by your browser');
    } else {
        console.log( 'Locating…');
      navigator.geolocation.getCurrentPosition(this.success, this.error);
      //navigator.geolocation.watchPosition(this.success, this.error, this.options);
    }
  
  }

  success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geolocation = {geo:{lat: latitude, lon:longitude}}
    alert( `Latitude: ${latitude} °, Longitude: ${longitude} °`);
    this.usersService.updateUserLocation(geolocation)
    
  }

  error() {
    alert('Unable to retrieve your location');
  }
}
