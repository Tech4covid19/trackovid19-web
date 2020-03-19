import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/shared/steps/steps.component';

@Component({
  selector: 'app-change-state-step2',
  templateUrl: './change-state-step2.component.html',
  styleUrls: ['./change-state-step2.component.scss'],
})
export class ChangeStateStep2Component implements OnInit {
  steps: Step[] = [
    { label: '1', url: '/dashboard/(dash:change-state-step1)', active: true },
    { label: '2', url: '/dashboard/(dash:change-state-step2)', active: true },
    { label: '3', url: '/dashboard/(dash:change-state-step3)', active: false },
  ];
  constructor() {}

  ngOnInit(): void {}
}
