import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoState } from 'src/app/states/video/video-state.model';
import { ShareHelper } from 'src/app/helpers/share-helper';

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

  public closeCallback: Function;

  constructor(private sanitizer: DomSanitizer, private shareHelper: ShareHelper) {
    this.closeCallback = this.close.bind(this);
  }

  ngOnInit(): void {
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video);
  }

  public close() {
    this.toggleShare();
  }

  shareFacebook() {
    this.shareHelper.facebook(this.video.share.facebook, this.shareText, this.hashtag);
  }

  shareWhatsapp() {
    this.shareHelper.whatsapp(this.shareText);
  }

  shareFacebookMessenger() {
    this.shareHelper.facebookMessenger(this.shareText);
  }

  shareLinkedIn() {
    this.shareHelper.linkedIn(this.video.share.linkedin);
  }

  shareTwitter() {
    this.shareHelper.twitter(this.shareText, this.hashtag);
  }

  shareCopyLinkText() {
    this.shareHelper.copyText(this.shareText);
  }
}
