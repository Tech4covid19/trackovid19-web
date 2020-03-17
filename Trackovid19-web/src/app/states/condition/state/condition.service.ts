import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { ConditionStore } from './condition.store';
import { Condition } from './condition.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ConditionService {
  public url = 'condition';

  constructor(private conditionStore: ConditionStore, private http: HttpClient) {}

  get() {
    return this.http.get<Condition[]>(`${this.url}`).pipe(
      tap(entities => {
        this.conditionStore.set(entities);
      }),
    );
  }
}
