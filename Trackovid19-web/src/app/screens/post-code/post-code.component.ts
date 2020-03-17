import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-code',
  templateUrl: './post-code.component.html',
  styleUrls: ['./post-code.component.scss']
})
export class PostCodeComponent implements OnInit {

  public opened = true;
  public closing = false;

  constructor() { }

  ngOnInit(): void {
  }

  public open() {
    setTimeout(() => {
      this.opened = true;
    }, 500);
  }

  public close() {
    // TODO: Emit event
    this.closing = true;
    setTimeout(() => {
      this.opened = false;
      this.closing = false;
    }, 500);
  }

}
