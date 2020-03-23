import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss'],
})
export class LinkCardComponent {
  @Input() label: string;
  @Input() url: string;
  @Input() navigateToLink = true;
  @Output() result = new EventEmitter<string>();

  constructor() {}

  public goToPage(url: string) {
    if (this.navigateToLink) {
      window.open(`#/${url}`, '_blank');
    } else {
      this.result.emit(this.url);
    }
  }
}
