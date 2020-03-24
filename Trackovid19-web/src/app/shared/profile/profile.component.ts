import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../../states/user/state/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnChanges {
  @Input() user: User = null;

  constructor(private router: Router) {}

  ngOnChanges(): void {
    // TODO
  }

  updatePostCode() {
    this.router.navigate(['post-code-step']);
  }
}
