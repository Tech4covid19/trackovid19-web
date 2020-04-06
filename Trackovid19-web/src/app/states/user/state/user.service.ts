import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { UserStore, UserState } from './user.store';

type ShareStatusResponse = {
  status: string;
  url: string;
};

@Injectable({ providedIn: 'root' })
export class UserService {
  public url = 'user';
  public shareStatusUrl = 'share/status';

  constructor(
    private userStore: UserStore,
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  getOne(userId: string | number) {
    return this.http.get<User>(`${this.url}/${userId}`).pipe(
      tap(entity => {
        this.userStore.add(entity);
      }),
    );
  }

  loginFacebook() {
    window.location.href = environment.serverURL + '/login/facebook';
  }

  loginGoogle() {
    window.location.href = environment.serverURL + '/login/google';
  }

  logout() {
    this.authService.unauthenticate();
  }

  updateUserInformation(userInformation) {
    return this.http
      .put(environment.apiUrl + 'user', userInformation)
      .pipe(tap((userData: User) => this.getUser().subscribe()));
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

  deleteUser(userInformation) {
    return this.http.delete(environment.apiUrl + 'user', userInformation);
  }

  hasUserOutdatedStatus(user) {
    if (!user || !user.latest_status) {
      return false;
    }

    const oneDayBehindTime = new Date().getTime() - 1 * 24 * 60 * 60 * 1000; // 1day 24hour  60min  60sec  1000msec
    const lastUpdateTime = new Date(user.latest_status.timestamp).getTime(); // we need the timestamp to match the difference

    return oneDayBehindTime > lastUpdateTime;
  }

  getShareStatusUrl(postalCode: string) {
    return this.http.get(environment.apiUrl + `share/status/${postalCode}`).pipe(
      tap((response: ShareStatusResponse) => {
        this.userStore.updateActive({ share_status_url: response.url });
      }),
    );
  }
}
