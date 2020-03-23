import { Injectable } from '@angular/core';
import { DashboardStore, DashboardState } from './dashboard.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  public url = environment.apiUrl + 'case';
  constructor(protected store: DashboardStore, private http: HttpClient) {}
  getCasesByPostalCode(postalCode: any) {
    const condition = this.http.get<any[]>(`${this.url}/condition/${postalCode}`);

    const confinement = this.http.get<any[]>(`${this.url}/confinement/${postalCode}`);

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
