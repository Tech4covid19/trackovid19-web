import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfinementStateService } from 'src/app/states/confinement-state/state/confinement-state.service';
import { ConfinementState } from 'src/app/states/confinement-state/state/confinement-state.model';
import { Step } from 'src/app/shared/steps/steps.component';
import { Case } from 'src/app/states/case/state/case.model';
import { CaseService } from 'src/app/states/case/state/case.service';
import { UserService } from 'src/app/states/user/state/user.service';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { ProfileServiceService } from 'src/app/shared/services/profile-service.service';

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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confinementStateService: ConfinementStateService,
    private caseService: CaseService,
    private userService: UserService,
    private profileService: ProfileServiceService,
  ) {
    this.updateConfinementStateCallback = this.updateConfinementState.bind(this);
  }

  ngOnInit(): void {
    this.case = history.state.data;
    this.confinementStateService.get().subscribe(confinementStates => {
      this.confinementStates = confinementStates;
    });
  }

  updateConfinementState(confinementStateId: number): void {
    this.case.confinementState = confinementStateId;
  }

  sendForm(): void {
    this.userService.updateUserInformation(this.case).subscribe();
    this.caseService.add(this.case).subscribe(
      () => {
        this.profileService.setProfileObs(this.case);
        this.router.navigate(['/dashboard', 'status']);
      },
      err => {
        console.log(err);
      },
    );
  }
}
