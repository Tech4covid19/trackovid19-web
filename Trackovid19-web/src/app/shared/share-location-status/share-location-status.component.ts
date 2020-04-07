import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShareHelper } from 'src/app/helpers/share-helper';

@Component({
  selector: 'app-share-locations-status',
  templateUrl: './share-locations-status.html',
  styleUrls: ['./share-locations-status.scss'],
})
export class ShareLocationStatusComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() toggleModal: Function;
  @Input() imageUrl: string;
  @Input() postCode: string;

  closable = true;

  public closeCallback: Function;

  constructor(private sanitizer: DomSanitizer, private shareHelper: ShareHelper) {
    this.closeCallback = this.close.bind(this);
  }

  shareText =
    'Este é o estado da minha zona, como está a tua? Vê o estado da tua zona em covidografia.pt';

  hashtags = ['AjudarQuemNosAjuda', 'covidografia', 'Tech4Covid19'];

  ngOnInit(): void {}

  public close() {
    this.toggleModal();
  }

  shareFacebook() {
    this.shareHelper.facebook(this.getImageUrl(), this.shareText, this.hashtags[0]);
  }

  shareWhatsapp() {
    this.shareHelper.whatsapp(`${this.shareText} ${this.getImageUrl()}`);
  }

  shareFacebookMessenger() {
    this.shareHelper.facebookMessenger(`${this.shareText} ${this.getImageUrl()}`);
  }

  shareLinkedIn() {
    this.shareHelper.linkedIn(this.getImageUrl());
  }

  shareTwitter() {
    this.shareHelper.twitter(this.getImageUrl(), this.hashtags);
  }

  shareCopyLinkText() {
    this.shareHelper.copyText(this.getImageUrl());
  }

  getImageUrl() {
    const imageUrlSplit = this.imageUrl.split('.');
    const imageId = imageUrlSplit[imageUrlSplit.length - 2].split('/').pop();
    return `https://covidografia.pt/o-meu-codigo-postal/${this.postCode}/${imageId}`;
  }
}
