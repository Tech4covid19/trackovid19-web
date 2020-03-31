import { Injectable } from '@angular/core';
import { DashboardStore } from './dashboard.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  public url = environment.apiUrl + 'case';
  constructor(protected store: DashboardStore, private http: HttpClient) {
    this.store.add({
      id: 0,
      conditions: [],
      confinements: [],
    });
    this.store.setActive(0);
    this.store.setLoading(false);
  }

  getCasesByPostalCodeConfinements(postalCode: any) {
    return this.http.get<any[]>(`${this.url}/confinement/${postalCode}`).pipe(
      tap(result => {
        this.store.update(0, { confinements: result });
      }),
    );
  }

  getCasesByPostalCodeConditions(postalCode: any) {
    return this.http.get<any[]>(`${this.url}/condition/${postalCode}`).pipe(
      tap(result => {
        this.store.updateActive({ conditions: result });
      }),
    );
  }
}
