import { Component, OnDestroy, OnInit, Input, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoState } from 'src/app/states/video/video-state.model';

@Component({
  selector: 'app-share-status',
  templateUrl: './share-status.component.html',
  styleUrls: ['./share-status.component.scss'],
})
export class ShareStatusComponent implements OnInit {
  @Input() showShare: boolean;
  @Input() toggleShare: Function;
  @Input() video: VideoState;

  closable = true;
  iframe: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video);
  }

  public close() {
    this.toggleShare();
  }

  shareFacebook() {
    const facebookWindow = window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${this.video.share.facebook}`,
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
      `https://twitter.com/intent/tweet?via=covidografia&url=${this.video.share.twitter}`,
      'height=350,width=600',
    );
    if (twitterWindow.focus) {
      twitterWindow.focus();
    }
    return false;
  }

  shareLinkedIn() {
    const linkedinWindow = window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${this.video.share.linkedin}`,
      'height=350,width=600',
    );
    if (linkedinWindow.focus) {
      linkedinWindow.focus();
    }
    return false;
  }
}
