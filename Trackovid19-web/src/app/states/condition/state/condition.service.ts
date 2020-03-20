import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConditionStore } from './condition.store';
import { Condition } from './condition.model';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ConditionService {
  public url = environment.apiUrl + 'condition';

  constructor(private conditionStore: ConditionStore, private http: HttpClient) {}

  get() {
    return this.http.get<Condition[]>(`${this.url}/all`).pipe(
      tap(entities => {
        this.conditionStore.set(entities);
      }),
    );
  }
}
