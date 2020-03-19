import { Component, OnInit } from '@angular/core';
import { ConditionService } from 'src/app/states/condition/state/condition.service';
import { Condition } from 'src/app/states/condition/state/condition.model';

@Component({
  selector: 'app-change-state-step2',
  templateUrl: './change-state-step2.component.html',
  styleUrls: ['./change-state-step2.component.scss'],
})
export class ChangeStateStep2Component implements OnInit {
  conditions: Condition[];

  constructor(private conditionService: ConditionService) {}

  ngOnInit(): void {
    this.conditionService.get().subscribe(conditions => {
      this.conditions = conditions;
    });
  }
}
