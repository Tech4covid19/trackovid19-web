import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfinementStateStore } from './confinement-state.store';
import { ConfinementState } from './confinement-state.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ConfinementStateService {
  public url = environment.apiUrl + 'confinementState';

  constructor(private store: ConfinementStateStore, private http: HttpClient) {}

  get() {
    return this.http.get<ConfinementState[]>(`${this.url}/all`).pipe(
      tap(entities => {
        this.store.set(entities);
      }),
    );
  }
}
