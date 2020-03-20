import { Component, OnInit } from '@angular/core';
import { ConditionState } from '../../models/condition-state/condition-state.model';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/states/dashboard/dashboard.service';

@Component({
  selector: 'app-chage-state-step1',
  templateUrl: './change-state-step1.component.html',
  styleUrls: ['./change-state-step1.component.scss'],
})
export class ChangeStateStep1Component implements OnInit {
  public conditionState: ConditionState;

  constructor(private router: Router, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getSymptomsCondictionsAndConfinementStates().subscribe(result => {
      console.log(result);
      this.conditionState = new ConditionState('Utilizador', result[0], result[1], result[2]);
    });
  }

  onClick() {
    this.router.navigate(['/dashboard', { outlets: { dash: ['change-state-step2'] } }], {
      state: { data: this.conditionState },
    });
  }
}
