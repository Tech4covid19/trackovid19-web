import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConditionState } from '../../models/condition-state/condition-state.model';
import { Step } from 'src/app/shared/steps/steps.component';

@Component({
  selector: 'app-change-state-step3',
  templateUrl: './change-state-step3.component.html',
  styleUrls: ['./change-state-step3.component.scss'],
})
export class ChangeStateStep3Component implements OnInit {
  public conditionState: ConditionState;

  steps: Step[] = [
    { label: '1', url: 'change-state-step1', active: true },
    { label: '2', url: 'change-state-step2', active: true },
    { label: '3', url: 'change-state-step3', active: true },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.conditionState = history.state.data;

    if (!this.conditionState) {
      this.router.navigate(['/dashboard', { outlets: { dash: ['change-state-step1'] } }], {
        state: { data: this.conditionState },
      });
    }
  }

  sendForm() {
    this.router.navigate(['/dashboard', { outlets: { dash: ['status'] } }], {
      relativeTo: this.activatedRoute,
    });
  }
}
