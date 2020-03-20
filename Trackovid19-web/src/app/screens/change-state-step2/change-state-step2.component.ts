import { Component, OnInit } from '@angular/core';
import { ConditionService } from 'src/app/states/condition/state/condition.service';
import { Condition } from 'src/app/states/condition/state/condition.model';
import { Step } from 'src/app/shared/steps/steps.component';

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

  constructor(private conditionService: ConditionService) {}

  ngOnInit(): void {
    this.conditionService.get().subscribe(conditions => {
      this.conditions = conditions;
    });
  }
}
