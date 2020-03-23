import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit, OnDestroy {
  @Input('showShare') showShare = false;
  @Input() closable = true;
  public closing = false;
  router: Router;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit(): void {
    //this.loadUser();
  }

  ngOnDestroy(): void {}

  public open() {
    setTimeout(() => {
      this.showShare = true;
    }, 500);
  }

  public close() {
    // TODO: Emit event
    this.closing = true;
    setTimeout(() => {
      this.showShare = false;
      this.closing = false;
    }, 500);
  }

  shareFacebook() {
    var facebookWindow = window.open(
      'https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/embed/Iw9koAS7h_Y',
      'facebook-popup',
      'height=350,width=600',
    );
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  }
}
