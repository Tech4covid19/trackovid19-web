import { Component, OnInit, Input } from '@angular/core';
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

  shareText =
    'Precisamos da tua ajuda! \n' +
    'Tudo o que pedimos é que nos digas se estás bem, em https://covidografia.pt.';

  hashtag = 'ajudarquemnosajuda';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video);
  }

  public close() {
    this.toggleShare();
  }

  shareFacebook() {
    // @ts-ignore
    if (typeof FB !== 'undefined' && FB != null) {
      // @ts-ignore
      FB.ui(
        {
          display: 'popup',
          method: 'share',
          href: this.video.share.facebook,
          quote: this.shareText,
          hashtag: `#${this.hashtag}`,
        },
        response => {
          console.log(response);
        },
      );
    }
  }

  shareWhatsapp() {
    const whatsappWindow = window.open(
      // docs => https://faq.whatsapp.com/en/general/26000030
      `https://wa.me/?text=${this.shareText}`,
    );
    if (whatsappWindow.focus) {
      whatsappWindow.focus();
    }
    return false;
  }

  shareFacebookMessenger() {
    if (typeof FB !== 'undefined' && FB != null) {
      // @ts-ignore
      FB.ui(
        {
          method: 'send',
          link: `${this.shareText}`,
        },
        response => {
          console.log(response);
        },
      );
    }
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

  shareTwitter() {
    const twitterWindow = window.open(
      `https://twitter.com/intent/tweet?via=covidografia&` +
        `url=${this.video.share.twitter}&` +
        `text=${this.shareText}&hashtags=${this.hashtag}`,
      'height=350,width=600',
    );
    if (twitterWindow.focus) {
      twitterWindow.focus();
    }
    return false;
  }

  shareCopyLinkText() {
    const el = document.createElement('textarea');
    el.value = `${this.shareText}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
