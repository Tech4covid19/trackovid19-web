import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SymptomStore } from './symptom.store';
import { Symptom } from 'src/app/models/symptom/symptom.model';

@Injectable({ providedIn: 'root' })
export class SymptomService {
  public url = 'symptom';

  constructor(private symptomStore: SymptomStore, private http: HttpClient) {}

  get() {
    return this.http.get<Symptom[]>(`${this.url}`).pipe(
      tap(entities => {
        this.symptomStore.set(entities);
      }),
    );
  }
}
