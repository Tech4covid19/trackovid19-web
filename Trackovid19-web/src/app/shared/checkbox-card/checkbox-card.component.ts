import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-card',
  templateUrl: './checkbox-card.component.html',
  styleUrls: ['./checkbox-card.component.scss']
})
export class CheckboxCardComponent implements OnInit {
  @Input() state: string;
  @Input() checked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
