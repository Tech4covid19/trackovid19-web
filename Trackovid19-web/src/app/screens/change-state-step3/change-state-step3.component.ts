import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfinementStateService } from 'src/app/states/confinement-state/state/confinement-state.service';
import { ConfinementState } from 'src/app/states/confinement-state/state/confinement-state.model';

@Component({
  selector: 'app-change-state-step3',
  templateUrl: './change-state-step3.component.html',
  styleUrls: ['./change-state-step3.component.scss'],
})
export class ChangeStateStep3Component implements OnInit {
  confinementStates: ConfinementState[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confinementStateService: ConfinementStateService,
  ) {}

  ngOnInit(): void {
    this.confinementStateService.get().subscribe(confinementStates => {
      this.confinementStates = confinementStates;
    });
  }

  sendForm() {
    this.router.navigate(['/dashboard', { outlets: { dash: ['status'] } }], {
      relativeTo: this.activatedRoute,
    });
  }
}
