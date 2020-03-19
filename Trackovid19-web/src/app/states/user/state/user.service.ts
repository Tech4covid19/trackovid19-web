import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from './user.model';
import { UserStore } from './user.store';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  public url = 'user';

  constructor(private userStore: UserStore, private http: HttpClient) {}

  getOne(userId: string | number) {
    return this.http.get<User>(`${this.url}/${userId}`).pipe(
      tap(entity => {
        this.userStore.add(entity);
      }),
    );
  }

  login() {
    window.location.href = environment.serverURL + '/login/facebook';
  }

  updateUserInformation(userInformation) {
    return this.http
      .put(environment.apiUrl + 'user', userInformation)
      .pipe(tap(userData => this.userStore.updateActive(userData)));
  }

  updateUserLocation(geolocation) {
    return this.http
      .post(environment.apiUrl + 'user', geolocation)
      .pipe(tap(userData => this.userStore.updateActive(userData)));
  }

  getUser() {
    return this.http.get(environment.apiUrl + 'user').pipe(
      tap((userData: User) => {
        this.userStore.add(userData);
        this.userStore.setActive(userData.id);
      }),
    );
  }
}
