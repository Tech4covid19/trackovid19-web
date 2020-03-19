import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  public goToPage(url: string) {
    console.log(url);
    window.location.href = url;
  }
}
