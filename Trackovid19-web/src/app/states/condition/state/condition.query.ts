import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ConditionStore, ConditionState } from './condition.store';

@Injectable({ providedIn: 'root' })
export class ConditionQuery extends QueryEntity<ConditionState> {
  constructor(protected store: ConditionStore) {
    super(store);
  }
}
