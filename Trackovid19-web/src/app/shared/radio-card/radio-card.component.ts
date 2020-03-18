import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrls: ['./radio-card.component.scss'],
})
export class RadioCardComponent implements OnInit {
  @Input() state: string;
  @Input() label: string;
  @Input() input_name: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
