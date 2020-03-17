import { Injectable } from '@angular/core';
import { Condition } from './condition.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ConditionState extends EntityState<Condition> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'condition' })
export class ConditionStore extends EntityStore<ConditionState> {
  constructor() {
    super();
  }
}
