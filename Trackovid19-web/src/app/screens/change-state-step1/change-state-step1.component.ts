import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Step } from 'src/app/shared/steps/steps.component';

@Component({
  selector: 'app-chage-state-step1',
  templateUrl: './change-state-step1.component.html',
  styleUrls: ['./change-state-step1.component.scss'],
})
export class ChangeStateStep1Component implements OnInit {
  steps: Step[] = [
    { label: '1', url: '/dashboard/(dash:change-state-step1)', active: true },
    { label: '2', url: '/dashboard/(dash:change-state-step2)', active: false },
    { label: '3', url: '/dashboard/(dash:change-state-step3)', active: false },
  ];
  constructor() {}

  ngOnInit(): void {}
}
