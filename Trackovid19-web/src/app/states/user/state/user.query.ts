import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserStore, UserState } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState> {
  constructor(protected store: UserStore) {
    super(store);
  }
}
