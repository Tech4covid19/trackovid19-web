import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
import { UsersState, UsersStore } from './users.store';
@Injectable({ providedIn: 'root' })
export class UsersService extends NgEntityService<UsersState> {

  constructor(protected store: UsersStore, protected authService: AuthService) {
    super(store);
  }

  login() {
    window.location.href = environment.serverURL + '/login/facebook';
  }

  updateUserLocation(geolocation) {
   return this.getHttp().post(environment.apiUrl + 'user', geolocation).pipe(
     tap( userData => this.store.updateActive(userData))
     )
  }

  getUser() {
    return this.getHttp().get(environment.apiUrl + 'user').pipe(
      tap( userData => {
        this.store.updateActive(userData);
      })
    );
  }
}
