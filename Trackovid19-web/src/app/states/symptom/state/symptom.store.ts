import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Symptom } from 'src/app/models/symptom/symptom.model';

export interface SymptomState extends EntityState<Symptom> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'symptom' })
export class SymptomStore extends EntityStore<SymptomState> {
  constructor() {
    super();
  }
}
