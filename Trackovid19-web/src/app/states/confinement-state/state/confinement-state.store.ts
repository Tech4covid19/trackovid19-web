import { Injectable } from '@angular/core';
import { StoreConfig, EntityStore, EntityState } from '@datorama/akita';
import { ConfinementState } from './confinement-state.model';

export interface ConfinementStateState extends EntityState<ConfinementState> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'confinementState' })
export class ConfinementStateStore extends EntityStore<ConfinementStateState> {
  constructor() {
    super();
  }
}
