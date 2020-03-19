import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-state-step3',
  templateUrl: './change-state-step3.component.html',
  styleUrls: ['./change-state-step3.component.scss'],
})
export class ChangeStateStep3Component implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
  sendForm() {
    this.router.navigate(['/dashboard', { outlets: { dash: ['status'] } }], {
      relativeTo: this.activatedRoute,
    });
  }
}
