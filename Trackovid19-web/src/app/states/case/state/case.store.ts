import { Injectable } from '@angular/core';
import { Case } from './case.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CaseState extends EntityState<Case> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'case' })
export class CaseStore extends EntityStore<CaseState> {
  constructor() {
    super();
  }
}
