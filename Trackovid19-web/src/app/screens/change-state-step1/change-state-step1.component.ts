import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConditionState } from '../../models/condition-state/condition-state.model';
import { Symptom } from '../../models/symptom/symptom.model';
import { Router } from '@angular/router';
import { HealthState } from 'src/app/models/health-state/healt-state.model';
import { ActivityState } from 'src/app/models/activity-state/activity-state.model';

@Component({
  selector: 'app-chage-state-step1',
  templateUrl: './change-state-step1.component.html',
  styleUrls: ['./change-state-step1.component.scss'],
})

export class ChangeStateStep1Component implements OnInit {
  public conditionState : ConditionState;
  
  constructor(private _router: Router) {
    this.conditionState = new ConditionState("Utilizador", 
      [ 
        new Symptom("Tosse Seca", 0), 
        new Symptom("Espirros", 1),
        new Symptom("Tosse com expectoração", 2),
        new Symptom("Dores Musculares", 3),
        new Symptom("Febre (acima de 37.5ºC", 4),
        new Symptom("Arrepios/Calafrios", 5) 
      ],
      [
        new HealthState("Infeção Confirmada", 0),
        new HealthState("Caso Suspeito", 1),
        new HealthState("Recuperado", 2),
        new HealthState("Presumidamente Saudável", 3)
      ],
      [
        new ActivityState("Mantenho a minha rotina habitual, não estando em isolamento social", 0),
        new ActivityState("Sou um caso suspeito e estou em isolamento social para evitar propagar o vírus", 1),
        new ActivityState("Presumo estar saudável e estou em casa voluntariamente, por precaução", 2),
        new ActivityState("Estou doente e em isolamento social para evitar a propagação do vírus", 3),
      ]
      );
  }

  // Add type to event
  checkSymptom(id: number, event) {
    this.conditionState.symptoms[id].selected = event.target.checked;
  }

  onClick() {
    this._router.navigate(['/change-state-step2'], { state: {data: this.conditionState }});
  }

  ngOnInit(): void {}
}
