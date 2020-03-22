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
}
