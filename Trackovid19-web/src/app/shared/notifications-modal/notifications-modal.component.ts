import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-notifications-modal',
  templateUrl: './notifications-modal.component.html',
  styleUrls: ['./notifications-modal.component.scss'],
})
export class NotificationsModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() toggleModal: Function;

  closable = true;

  public closeCallback: Function;

  constructor(private sanitizer: DomSanitizer) {
    this.closeCallback = this.close.bind(this);
  }

  ngOnInit(): void {}

  public close() {
    this.toggleModal();
  }
}
