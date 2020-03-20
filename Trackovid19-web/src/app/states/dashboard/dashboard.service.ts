import { Injectable } from '@angular/core';
import { DashboardStore } from './dashboard.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Condition } from '../../models/conditon/condition.model';
import { Symptom } from 'src/app/models/symptom/symptom.model';
import { ConfinementState } from 'src/app/models/confinement-state/confinement-state.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  public url = environment.apiUrl;
  constructor(protected store: DashboardStore, private http: HttpClient) {}

  getSymptomsCondictionsAndConfinementStates(): Observable<any> {
    const symptoms = this.http.get<Symptom[]>(`${this.url}symptom/all`);
    const conditions = this.http.get<Condition[]>(`${this.url}condition/all`);
    const confinementState = this.http.get<ConfinementState[]>(`${this.url}confinementState/all`);

    return forkJoin(symptoms, conditions, confinementState).pipe();
  }

  getCasesByPostalCode(postalCode: any) {
    const condition = this.http.get<any[]>(`${this.url}case/condition/${postalCode}`);

    const confinement = this.http.get<any[]>(`${this.url}case/confinement/${postalCode}`);

    return forkJoin(condition, confinement).pipe(
      tap(result => {
        let cases = result[0].concat(result[1]);
        cases = cases.map((i, index) => {
          let object = i;
          object.id = index;
          return object;
        });
        this.store.set(cases);
      }),
    );
  }
}
