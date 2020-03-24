import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss'],
})
export class LinkCardComponent {
  @Input() label: string;
  @Input() url: string;

  constructor() {}

  public goToPage(url: string) {
    window.open(`#/${url}`, '_blank');
  }
}
