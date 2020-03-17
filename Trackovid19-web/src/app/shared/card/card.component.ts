import { Component, OnInit, Input } from "@angular/core";

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
export class CardComponent implements OnInit {
  @Input() counter: number;
  @Input() label: string;
  @Input() icon: string;
  @Input() color?: string;

  constructor() {}

  ngOnInit(): void {}
}
