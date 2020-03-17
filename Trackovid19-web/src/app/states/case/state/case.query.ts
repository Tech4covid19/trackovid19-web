import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CaseStore, CaseState } from './case.store';

@Injectable({ providedIn: 'root' })
export class CaseQuery extends QueryEntity<CaseState> {
  constructor(protected store: CaseStore) {
    super(store);
  }
}
