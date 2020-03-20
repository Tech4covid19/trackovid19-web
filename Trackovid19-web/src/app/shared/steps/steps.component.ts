import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(public router: Router) {}

  ngOnInit(): void {}

  public goToStep(step: Step) {
    if (step.active) {
      this.router.navigate(['/dashboard', step.url]);
    }
  }
}
