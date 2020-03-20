import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-confirm-btn',
  templateUrl: './state-confirm-btn.component.html',
  styleUrls: ['./state-confirm-btn.component.scss'],
})
export class StateConfirmBtnComponent implements OnInit {
  @Input() btnText: string;
  @Input() disabled: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
