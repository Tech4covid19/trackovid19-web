import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../states/user/state/user.model';
import { UserService } from 'src/app/states/user/state/user.service';

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

  constructor(private userService: UserService) {
    this.closeCallback = this.close.bind(this);
  }

  ngOnInit(): void {
    if (!this.user) {
      this.showModal = false;
    }
  }

  public close() {
    this.showResultContainer = false;
    this.toggleModal();
  }

  public deleteUser() {
    if (this.user) {
      this.userService.deleteUser(this.user).subscribe((response: any) => {
        this.userDeletedWithSuccess = response && response.status === 'ok';
        this.showResultContainer = true;
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