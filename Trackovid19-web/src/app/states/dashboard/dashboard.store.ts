import { Injectable } from '@angular/core';
import { Dashboard } from './dashboard.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface DashboardState extends EntityState<Dashboard> {}

export function createInitialState(): DashboardState {
  return {
    id: 0,
    conditions: [],
    confinements: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'dashboard' })
export class DashboardStore extends EntityStore<DashboardState> {
  constructor() {
    super(createInitialState());
  }
}
