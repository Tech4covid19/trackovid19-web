import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConditionState } from '../../models/condition-state/condition-state.model';

@Component({
  selector: 'app-change-state-step3',
  templateUrl: './change-state-step3.component.html',
  styleUrls: ['./change-state-step3.component.scss'],
})
export class ChangeStateStep3Component implements OnInit {
  public conditionState: ConditionState;

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
