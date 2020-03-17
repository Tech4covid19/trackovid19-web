import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
export type cardConfig = {
  icon: any;
  number: number;
  text: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnChanges {
  @Input() data: cardConfig
  card: cardConfig
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges) {
      if(this.data) {
        this.card = this.data
      }
  }
}
