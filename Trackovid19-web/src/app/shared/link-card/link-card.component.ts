import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss'],
})
export class LinkCardComponent {
  @Input() label: string;
  @Input() url: string;

  constructor(public router: Router) {}

  public goToPage(url: string) {
    this.router.navigate([url]);
  }
}
