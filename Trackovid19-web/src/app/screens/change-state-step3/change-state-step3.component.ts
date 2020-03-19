import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Step } from 'src/app/shared/steps/steps.component';

@Component({
  selector: 'app-change-state-step3',
  templateUrl: './change-state-step3.component.html',
  styleUrls: ['./change-state-step3.component.scss'],
})
export class ChangeStateStep3Component implements OnInit {
  steps: Step[] = [
    { label: '1', url: 'change-state-step1', active: true },
    { label: '2', url: 'change-state-step2', active: true },
    { label: '3', url: 'change-state-step3', active: true },
  ];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
  sendForm() {
    this.router.navigate(['/dashboard', { outlets: { dash: ['status'] } }], {
      relativeTo: this.activatedRoute,
    });
  }
}
