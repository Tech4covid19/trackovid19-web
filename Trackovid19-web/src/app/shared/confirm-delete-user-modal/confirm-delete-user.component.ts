import { Component, OnInit, Input, Renderer2 } from '@angular/core';

import { User } from '../../states/user/state/user.model';
import { UserService } from 'src/app/states/user/state/user.service';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-confirm-delete-user-modal',
  templateUrl: './confirm-delete-user-modal.component.html',
  styleUrls: ['./confirm-delete-user-modal.component.scss'],
})
export class ConfirmDeleteUserModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() toggleModal: Function;
  @Input() user: User = null;

  closable = true;
  userDeletedWithSuccess = false;
  showResultContainer = false;

  public closeCallback: Function;

  constructor(
    private userService: UserService,
    private swPush: SwPush,
    private renderer: Renderer2,
  ) {
    this.closeCallback = this.close.bind(this);
  }

  ngOnInit(): void {
    if (!this.user) {
      this.showModal = false;
    }
  }

  public close() {
    this.showResultContainer = false;
    this.renderer.setStyle(document.body, 'overflow', 'initial');
    this.renderer.setStyle(document.body, 'position', 'initial');
    this.toggleModal();
  }

  public deleteUser() {
    if (this.user) {
      this.userService.deleteUser(this.user).subscribe((response: any) => {
        this.userDeletedWithSuccess = response && response.status === 'ok';
        this.showResultContainer = true;
      });
      this.swPush
        .unsubscribe()
        .then(success => {
          console.log('Unsubscription successful', success);
        })
        .catch(err => {
          console.log('Unsubscription failed', err);
        });
    } else {
      this.close();
    }
  }

  public closeAfterDelete() {
    this.userService.logout();
    this.close();
    window.open('https://covidografia.pt/', '_self');
  }
}
