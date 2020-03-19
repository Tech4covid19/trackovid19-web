import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ConfinementStateState, ConfinementStateStore } from './confinement-state.store';

@Injectable({ providedIn: 'root' })
export class ConfinementQuerry extends QueryEntity<ConfinementStateState> {
  constructor(protected store: ConfinementStateStore) {
    super(store);
  }
}
