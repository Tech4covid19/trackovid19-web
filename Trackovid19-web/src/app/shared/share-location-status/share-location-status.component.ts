import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShareHelper } from 'src/app/helpers/share-helper';

@Component({
  selector: 'app-share-locations-status-modal',
  templateUrl: './share-locations-status-modal.component.html',
  styleUrls: ['./share-locations-status-modal.component.scss'],
})
export class ShareLocationStatusModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() toggleModal: Function;
  @Input() acceptShareLocationsStatus: Function;
  imageUrl = 'https://www.dhs.gov/sites/default/files/images/20_0305_opa_coronavirus-micro.jpg';

  closable = true;

  public closeCallback: Function;

  constructor(private sanitizer: DomSanitizer, private shareHelper: ShareHelper) {
    this.closeCallback = this.close.bind(this);
  }

  ngOnInit(): void {}

  public close() {
    this.toggleModal();
  }

  public accept() {
    this.acceptShareLocationsStatus();
  }

  shareFacebook() {
    this.shareHelper.facebook(this.imageUrl);
  }

  shareWhatsapp() {
    this.shareHelper.whatsapp(this.imageUrl);
  }

  shareFacebookMessenger() {
    this.shareHelper.facebookMessenger(this.imageUrl);
  }

  shareLinkedIn() {
    this.shareHelper.linkedIn(this.imageUrl);
  }

  shareTwitter() {
    this.shareHelper.twitter(this.imageUrl);
  }

  shareCopyLinkText() {
    this.shareHelper.copyText(this.imageUrl);
  }
}
