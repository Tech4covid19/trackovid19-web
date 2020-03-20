import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/shared/steps/steps.component';
import { Router } from '@angular/router';
import { ConditionState } from '../../models/condition-state/condition-state.model';

@Component({
  selector: 'app-change-state-step2',
  templateUrl: './change-state-step2.component.html',
  styleUrls: ['./change-state-step2.component.scss'],
})
export class ChangeStateStep2Component implements OnInit {
  public conditionState: ConditionState;
  steps: Step[] = [
    { label: '1', url: 'change-state-step1', active: true },
    { label: '2', url: 'change-state-step2', active: true },
    { label: '3', url: 'change-state-step3', active: false },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.conditionState = history.state.data;

    if (!this.conditionState) {
      this.router.navigate(['/dashboard', { outlets: { dash: ['change-state-step1'] } }], {
        state: { data: this.conditionState },
      });
    }
  }

  onClick() {
    this.router.navigate(['/dashboard', { outlets: { dash: ['change-state-step3'] } }], {
      state: { data: this.conditionState },
    });
  }
}
