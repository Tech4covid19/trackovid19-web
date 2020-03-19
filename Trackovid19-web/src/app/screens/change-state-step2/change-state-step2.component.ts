import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConditionState } from '../../models/condition-state/condition-state.model';

@Component({
  selector: 'app-change-state-step2',
  templateUrl: './change-state-step2.component.html',
  styleUrls: ['./change-state-step2.component.scss']
})
export class ChangeStateStep2Component implements OnInit {
  public conditionState : ConditionState;

  constructor() { }

  ngOnInit(): void {
    this.conditionState = history.state.data;
  }

}
