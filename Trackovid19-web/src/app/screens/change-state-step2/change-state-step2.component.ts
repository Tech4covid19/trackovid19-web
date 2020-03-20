import { Component, OnInit } from '@angular/core';
import { ConditionService } from 'src/app/states/condition/state/condition.service';
import { Condition } from 'src/app/states/condition/state/condition.model';
import { Step } from 'src/app/shared/steps/steps.component';
import { Case } from 'src/app/states/case/state/case.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-state-step2',
  templateUrl: './change-state-step2.component.html',
  styleUrls: ['./change-state-step2.component.scss'],
})
export class ChangeStateStep2Component implements OnInit {
  conditions: Condition[];
  steps: Step[] = [
    { label: '1', url: 'change-state-step1', active: true },
    { label: '2', url: 'change-state-step2', active: true },
    { label: '3', url: 'change-state-step3', active: false },
  ];
  case: Case;

  constructor(private conditionService: ConditionService, private router: Router) {}

  ngOnInit(): void {
    this.case = history.state.data;

    this.conditionService.get().subscribe(conditions => {
      this.conditions = conditions;
    });
  }

  updateCondition(conditionId: number, $event): void {
    if ($event.target.checked) {
      this.case.condition = conditionId;
    }
  }

  onClick() {
    this.router.navigate(['/dashboard', 'change-state-step3'], {
      state: { data: this.case },
    });
  }
}
