
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

export type cardConfig = {
  icon: any;
  number: number;
  text: string;


export enum CardColor {
  Orange = "orange",
  Red = "red",
  Green = "green",
  purple = "purple"
}

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})


export class CardComponent implements OnChanges {
  @Input() data: cardConfig
  @Input() counter: number;
  @Input() label: string;
  @Input() icon: string;
  @Input() color?: string;
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
