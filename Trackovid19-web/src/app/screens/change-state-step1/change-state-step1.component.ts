import { Step } from 'src/app/shared/steps/steps.component';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SymptomService } from 'src/app/states/symptom/state/symptom.service';
import { Symptom } from 'src/app/states/symptom/state/symptom.model';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { Case, createCase } from 'src/app/states/case/state/case.model';
import { Router } from '@angular/router';
import { CheckboxCardComponent } from 'src/app/shared/checkbox-card/checkbox-card.component';

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

  @ViewChildren(CheckboxCardComponent) checkBoxes: QueryList<CheckboxCardComponent>;

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

  // TODO: change app-checkbox-card to output check value instead
  updateSymptoms(symptomId: number, checked: boolean): void {
    if (checked) {
      if (symptomId === 1) {
        // ID 1 - No Symptoms
        this.uncheckAll();
        this.checkOne(1);
      } else {
        this.uncheckOne(1); // ID 1 - No Symptoms
      }

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

  private uncheckAll() {
    this.case.symptoms = [];
    this.checkBoxes.forEach(checkBox => (checkBox.checked = false));
  }

  private checkOne(symptomId: number) {
    this.case.symptoms.push(symptomId);
    this.setCheckValue(symptomId, true);
  }

  private uncheckOne(symptomId: number) {
    const symptomIndex = this.case.symptoms.indexOf(symptomId);
    this.case.symptoms.splice(symptomIndex, 1);
    this.setCheckValue(symptomId, false);
  }

  private setCheckValue(symptomId: number, value: boolean) {
    for (const checkBox of this.checkBoxes) {
      if (checkBox.symptomId === symptomId) {
        checkBox.checked = value;
        break;
      }
    }
  }
}
