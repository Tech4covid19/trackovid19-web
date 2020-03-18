import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Case } from './case.model';
import { CaseStore } from './case.store';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CaseService {
  constructor(private caseStore: CaseStore, private http: HttpClient) {}

  public url = environment.apiUrl + 'case';

  getOne(id: ID) {
    return this.http.get<Case>(`${this.url}/${id}`).pipe(
      tap(entity => {
        this.caseStore.upsert(id, entity);
      }),
    );
  }

  get() {
    return this.http.get<Case[]>(`${this.url}/all`).pipe(
      tap(entities => {
        this.caseStore.set(entities);
      }),
    );
  }

  add(body: Case) {
    return this.http.post<Case>(`${this.url}`, body).pipe(
      tap(() => {
        this.caseStore.add(body);
      }),
    );
  }

  update(id: ID, body: Partial<Case>) {
    return this.http.post<Case>(`${this.url}/${id}`, body).pipe(
      tap(() => {
        this.caseStore.update(id, body);
      }),
    );
  }

  remove(id: ID) {
    return this.http.delete<Case>(`${this.url}/${id}`).pipe(
      tap(() => {
        this.caseStore.remove(id);
      }),
    );
  }
}
