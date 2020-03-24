import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.scss'],
})
export class RadioCardComponent implements AfterViewInit {
  @Input() checked: boolean;
  @Input() state: string;
  @Input() label: string;
  @Input() input_name: string;
  @Input() id: number;
  @Input() clickCard: Function;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.checked) {
      document.getElementById(`${this.id}`).click();
    }
  }

  public onClick() {
    document.getElementById(`${this.id}`).click();
    this.clickCard(this.id);
  }
}
