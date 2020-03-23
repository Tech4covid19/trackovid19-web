import { Component, OnDestroy, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-status',
  templateUrl: './share-status.component.html',
  styleUrls: ['./share-status.component.scss'],
})
export class ShareStatusComponent {
  @Input() showShare: boolean;
  @Input() toggleShare: Function;

  closable = true;

  constructor() {}

  public close() {
    this.toggleShare();
  }

  shareFacebook() {
    const facebookWindow = window.open(
      'https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/embed/Iw9koAS7h_Y',
      'facebook-popup',
      'height=350,width=600',
    );
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  }

  shareTwitter() {
    const twitterWindow = window.open(
      'https://twitter.com/intent/tweet?via=covidografia&url=https://www.youtube.com/embed/Iw9koAS7h_Y',
      'height=350,width=600',
    );
    if (twitterWindow.focus) {
      twitterWindow.focus();
    }
    return false;
  }

  shareLinkedIn() {
    const linkedinWindow = window.open(
      'https://www.linkedin.com/sharing/share-offsite/?url=https://www.youtube.com/embed/Iw9koAS7h_Y',
      'height=350,width=600',
    );
    if (linkedinWindow.focus) {
      linkedinWindow.focus();
    }
    return false;
  }
}
