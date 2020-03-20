import { Step } from 'src/app/shared/steps/steps.component';
import { Component, OnInit } from '@angular/core';
import { SymptomService } from 'src/app/states/symptom/state/symptom.service';
import { Symptom } from 'src/app/states/symptom/state/symptom.model';

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

  constructor(private symptomService: SymptomService) {}

  ngOnInit(): void {
    this.symptomService.get().subscribe(symptoms => {
      this.symptoms = symptoms;
    });
  }
}
