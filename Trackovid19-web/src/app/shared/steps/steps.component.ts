import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Case } from 'src/app/states/case/state/case.model';

export interface Step {
  label: string;
  active: boolean;
  url: string;
}

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {
  @Input() steps: Step[];
  @Input() getState: Function;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  public goToStep(step: Step) {
    const state = this.getState();
    if (step.active) {
      this.router.navigate(['/dashboard', step.url], {
        state: { data: state },
      });
    }
  }
}
