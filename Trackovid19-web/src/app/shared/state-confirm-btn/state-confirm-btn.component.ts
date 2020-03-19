import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-confirm-btn',
  templateUrl: './state-confirm-btn.component.html',
  styleUrls: ['./state-confirm-btn.component.scss'],
})
export class StateConfirmBtnComponent implements OnInit {
  @Input() btnText: string;
  constructor() {}

  ngOnInit(): void {}
}
