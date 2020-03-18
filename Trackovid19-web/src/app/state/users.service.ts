import { Injectable } from '@angular/core';
import { UsersStore, UsersState } from './users.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators'
import { AuthService } from '../shared/services/auth.service';
@Injectable({ providedIn: 'root' })
export class UsersService extends NgEntityService<UsersState> {

  constructor(protected store: UsersStore, protected authService: AuthService) {
    super(store);
  }

  login() {
    window.location.href = environment.apiUrl + '/login/facebook';
  }

  updateUserLocation(geolocation) {
   return this.getHttp().post(environment.apiUrl + 'user', geolocation).pipe(
     tap( userData => this.store.updateActive(userData))
     )
  }
}
