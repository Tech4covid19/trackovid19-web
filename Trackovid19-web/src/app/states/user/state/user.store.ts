import { Injectable } from '@angular/core';
import { User } from './user.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { produce } from 'immer';
export interface UserState extends EntityState<User> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user', idKey: 'id', producerFn: produce })
export class UserStore extends EntityStore<UserState> {
  constructor() {
    super();
  }
}
