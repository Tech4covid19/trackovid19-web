import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DashboardStore, DashboardState } from './dashboard.store';

@Injectable({ providedIn: 'root' })
export class DashboardQuery extends QueryEntity<DashboardState> {
  constructor(protected store: DashboardStore) {
    super(store);
  }
}
