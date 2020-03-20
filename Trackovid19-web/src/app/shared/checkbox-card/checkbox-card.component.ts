import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-card',
  templateUrl: './checkbox-card.component.html',
  styleUrls: ['./checkbox-card.component.scss'],
})
export class CheckboxCardComponent {
  checked = false;
  @Input() state: string;
  @Input() symptomId: number;
  @Input() clickCard: Function;

  constructor() {}

  public onClick() {
    this.checked = !this.checked;
    this.clickCard(this.symptomId, this.checked);
  }
}
