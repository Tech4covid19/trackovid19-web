import { Component, OnInit } from '@angular/core';
import { ConditionState } from '../../models/condition-state/condition-state.model';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/states/dashboard/dashboard.service';

import { Step } from 'src/app/shared/steps/steps.component';

@Component({
  selector: 'app-chage-state-step1',
  templateUrl: './change-state-step1.component.html',
  styleUrls: ['./change-state-step1.component.scss'],
})
export class ChangeStateStep1Component implements OnInit {
  public conditionState: ConditionState;

  steps: Step[] = [
    { label: '1', url: 'change-state-step1', active: true },
    { label: '2', url: 'change-state-step2', active: false },
    { label: '3', url: 'change-state-step3', active: false },
  ];

  constructor(private router: Router, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getSymptomsCondictionsAndConfinementStates().subscribe(result => {
      this.conditionState = new ConditionState('Utilizador', result[0], result[1], result[2]);
    });
  }

  onClick() {
    this.router.navigate(['/dashboard', { outlets: { dash: ['change-state-step2'] } }], {
      state: { data: this.conditionState },
    });
  }
}
