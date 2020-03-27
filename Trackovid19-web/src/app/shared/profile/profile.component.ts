import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../../states/user/state/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnChanges {
  @Input() user: User = null;

  constructor() {}

  ngOnChanges(): void {
    // TODO
  }
}
