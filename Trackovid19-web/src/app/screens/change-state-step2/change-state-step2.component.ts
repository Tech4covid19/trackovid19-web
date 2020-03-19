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

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.conditionState = history.state.data;
  }

  changeHealthState(id: number, event) {
    this.conditionState.health_states.forEach( (element) => {
      if(element.id == id) {
        element.actual_state = true;
      } else {
        element.actual_state = false;
      }
    })
  }

  onClick() {
    this._router.navigate(['/change-state-step3'], { state: {data: this.conditionState }});
  }

}
