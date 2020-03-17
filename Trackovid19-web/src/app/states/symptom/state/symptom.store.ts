import { Injectable } from '@angular/core';
import { Symptom } from './symptom.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface SymptomState extends EntityState<Symptom> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'symptom' })
export class SymptomStore extends EntityStore<SymptomState> {
  constructor() {
    super();
  }
}
