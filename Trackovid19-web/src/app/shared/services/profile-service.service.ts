import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Case } from 'src/app/states/case/state/case.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileServiceService {
  constructor() {}
  private profileObs: BehaviorSubject<any> = new BehaviorSubject('');

  getProfileObs(): Observable<Case> {
    return this.profileObs.asObservable();
  }

  setProfileObs(profile: Case) {
    this.profileObs.next(profile);
  }
}
