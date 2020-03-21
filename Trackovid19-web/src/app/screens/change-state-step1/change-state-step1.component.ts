import { Step } from 'src/app/shared/steps/steps.component';
import { Component, OnInit } from '@angular/core';
import { SymptomService } from 'src/app/states/symptom/state/symptom.service';
import { Symptom } from 'src/app/states/symptom/state/symptom.model';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { Case, createCase } from 'src/app/states/case/state/case.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chage-state-step1',
  templateUrl: './change-state-step1.component.html',
  styleUrls: ['./change-state-step1.component.scss'],
})
export class ChangeStateStep1Component implements OnInit {
  symptoms: Symptom[];
  steps: Step[] = [
    { label: '1', url: 'change-state-step1', active: true },
    { label: '2', url: 'change-state-step2', active: false },
    { label: '3', url: 'change-state-step3', active: false },
  ];
  case: Case;
  public updateSymptomsCallback: Function;

  constructor(
    private symptomService: SymptomService,
    private query: UserQuery,
    private router: Router,
  ) {
    const id = this.query.getActiveId();
    const user = this.query.getEntity(id);
    this.updateSymptomsCallback = this.updateSymptoms.bind(this);

    this.case = createCase({ postalCode: user?.postalcode, geo: { lat: 0, lon: 0 }, symptoms: [] });
  }

  ngOnInit(): void {
    this.symptomService.get().subscribe(symptoms => {
      this.symptoms = symptoms;
    });
  }

  updateSymptoms(symptomId: number, checked: boolean): void {
    if (checked) {
      if (!this.case.symptoms.includes(symptomId)) {
        this.case.symptoms.push(symptomId);
      }
    } else {
      const index = this.case.symptoms.indexOf(symptomId);
      if (index > -1) {
        this.case.symptoms.splice(index, 1);
      }
    }
  }

  onClick() {
    this.router.navigate(['/dashboard', 'change-state-step2'], {
      state: { data: this.case },
    });
  }
}
