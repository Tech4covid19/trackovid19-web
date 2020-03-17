import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from './user.model';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService {
    public url = 'user';

    constructor(private userStore: UserStore, private http: HttpClient) {}

    getOne(userId: string | number) {
        return this.http.get<User>(`${this.url}/${userId}`).pipe(
            tap(entity => {
                this.userStore.add(entity);
            })
        );
    }
}
