import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Condition } from 'src/app/models/conditon/condition.model';

export interface ConditionState extends EntityState<Condition> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'condition' })
export class ConditionStore extends EntityStore<ConditionState> {
  constructor() {
    super();
  }
}
