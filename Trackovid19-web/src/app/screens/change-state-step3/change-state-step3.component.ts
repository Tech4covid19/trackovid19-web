import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileServiceService } from 'src/app/shared/services/profile-service.service';
import { Step } from 'src/app/shared/steps/steps.component';
import { Case } from 'src/app/states/case/state/case.model';
import { CaseService } from 'src/app/states/case/state/case.service';
import { ConfinementState } from 'src/app/states/confinement-state/state/confinement-state.model';
import { ConfinementStateService } from 'src/app/states/confinement-state/state/confinement-state.service';
import { UserService } from 'src/app/states/user/state/user.service';

@Component({
  selector: 'app-change-state-step3',
  templateUrl: './change-state-step3.component.html',
  styleUrls: ['./change-state-step3.component.scss'],
})
export class ChangeStateStep3Component implements OnInit {
  confinementStates: ConfinementState[];
  steps: Step[] = [
    { label: '1', url: 'change-state-step1', active: true },
    { label: '2', url: 'change-state-step2', active: true },
    { label: '3', url: 'change-state-step3', active: true },
  ];
  case: Case;

  public updateConfinementStateCallback: Function;
  public getStateCallback: Function;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confinementStateService: ConfinementStateService,
    private caseService: CaseService,
    private userService: UserService,
    private profileService: ProfileServiceService,
  ) {
    this.updateConfinementStateCallback = this.updateConfinementState.bind(this);
    this.getStateCallback = this.getState.bind(this);
  }

  ngOnInit(): void {
    if (history.state.data) {
      this.case = history.state.data;
      this.confinementStateService.get().subscribe(confinementStates => {
        this.confinementStates = confinementStates;
      });
    } else {
      this.router.navigate(['/dashboard', this.steps[0].url]);
    }
  }

  getState() {
    return this.case;
  }

  updateConfinementState(confinementStateId: number): void {
    this.case.confinementState = confinementStateId;
  }

  sendForm(): void {
    this.userService.updateUserInformation(this.case).subscribe();
    this.caseService.add(this.case).subscribe(
      () => {
        this.profileService.setProfileObs(this.case);
        localStorage.setItem('share', 'true');
        this.router.navigate(['/dashboard', 'status']);
      },
      err => {
        console.log(err);
      },
    );
  }
}
