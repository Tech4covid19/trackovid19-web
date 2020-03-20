import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Symptom } from './symptom.model';
import { SymptomStore } from './symptom.store';

@Injectable({ providedIn: 'root' })
export class SymptomService {
  public url = environment.apiUrl + 'symptom';

  constructor(private symptomStore: SymptomStore, private http: HttpClient) {}

  get() {
    return this.http.get<Symptom[]>(`${this.url}/all`).pipe(
      tap(entities => {
        this.symptomStore.set(entities);
      }),
    );
  }
}
