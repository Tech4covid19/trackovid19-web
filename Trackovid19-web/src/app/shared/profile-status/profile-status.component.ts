import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../../states/user/state/user.model';
import { ConfinementState } from '../../states/confinement-state/state/confinement-state.model';

@Component({
  selector: 'app-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss'],
})
export class ProfileStatusComponent implements OnChanges {
  @Input() user: User = null;
  @Input() state: ConfinementState = null;

  statusList: any[] = [];

  constructor() {}

  ngOnChanges(): void {
    if (this.user && this.state) {
      this.statusList = [
        {
          text: this.user.has_symptoms_text,
          color: this.user.has_symptoms ? 'orangered' : '#5bee73',
          tooltip: this.user.has_symptoms_text,
        },
        {
          text: this.state.state,
          color: this.state.id > 1 ? 'orangered' : '#5bee73',
          tooltip: this.state.description,
        },
      ];
    }
  }
}
