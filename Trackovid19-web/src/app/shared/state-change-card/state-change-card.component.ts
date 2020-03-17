import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-change-card',
  templateUrl: './state-change-card.component.html',
  styleUrls: ['./state-change-card.component.scss']
})
export class StateChangeCardComponent implements OnInit {
  @Input() state: string;
  @Input() label: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
