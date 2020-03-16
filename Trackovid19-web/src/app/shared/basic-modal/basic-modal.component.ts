import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss']
})
export class BasicModalComponent implements OnInit {
  @Input() closable = true;
  public opened = true;
  public closing = false;

  constructor() {
  }

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
