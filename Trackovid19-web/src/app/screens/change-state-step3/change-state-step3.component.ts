import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfinementStateService } from 'src/app/states/confinement-state/state/confinement-state.service';
import { ConfinementState } from 'src/app/states/confinement-state/state/confinement-state.model';
import { Step } from 'src/app/shared/steps/steps.component';
import { Case } from 'src/app/states/case/state/case.model';
import { CaseService } from 'src/app/states/case/state/case.service';

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

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confinementStateService: ConfinementStateService,
    private caseService: CaseService,
  ) {}

  ngOnInit(): void {
    this.case = history.state.data;

    this.confinementStateService.get().subscribe(confinementStates => {
      this.confinementStates = confinementStates;
    });
  }

  updateConfinementState(confinementStateId: number, $event): void {
    if ($event.target.checked) {
      this.case.confinementState = confinementStateId;
    }
  }

  sendForm(): void {
    this.caseService.add(this.case).subscribe(
      () => {
        this.router.navigate(['/dashboard', 'status'], {
          relativeTo: this.activatedRoute,
        });
      },
      err => {
        console.log(err);
      },
    );
  }
}
