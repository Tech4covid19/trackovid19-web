import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SymptomStore, SymptomState } from './symptom.store';

@Injectable({ providedIn: 'root' })
export class SymptomQuery extends QueryEntity<SymptomState> {

  constructor(protected store: SymptomStore) {
    super(store);
  }

}
