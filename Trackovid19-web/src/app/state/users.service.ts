import { Injectable } from '@angular/core';
import { UsersStore, UsersState } from './users.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators'
@Injectable({ providedIn: 'root' })
export class UsersService extends NgEntityService<UsersState> {

  constructor(protected store: UsersStore) {
    super(store);
  }
  login() {

  }
  updateUserLocation(geolocation) {
   return this.getHttp().post(environment.apiUrl + 'user', geolocation).pipe(
     tap( userData => this.store.updateActive(userData))
     )
  }
}
