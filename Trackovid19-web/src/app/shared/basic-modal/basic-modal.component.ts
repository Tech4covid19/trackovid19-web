import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss'],
})
export class BasicModalComponent implements OnInit {
  @Input() closable = true;
  @Input() opened = true;
  @Input() closeCallback: Function;
  @Input() greyBackground = false;
  @Input() purpleBackground = false;
  @Input() minHeight = false;
  public closing = false;

  constructor(private renderer: Renderer2) {
    if (this.opened) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
      this.renderer.setStyle(document.body, 'position', 'fixed');
    }
  }

  ngOnInit(): void {}

  public open() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.renderer.setStyle(document.body, 'position', 'fixed');
    this.opened = true;
  }

  public close() {
    this.closing = true;
    this.renderer.setStyle(document.body, 'overflow', 'initial');
    this.renderer.setStyle(document.body, 'position', 'initial');
    this.opened = false;
    this.closing = false;
    this.closeCallback();
  }
}
