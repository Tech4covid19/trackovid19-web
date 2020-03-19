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

  constructor(private symptomService: SymptomService) {}

  ngOnInit(): void {
    this.symptomService.get().subscribe(symptoms => {
      this.symptoms = symptoms;
    });
  }
}
