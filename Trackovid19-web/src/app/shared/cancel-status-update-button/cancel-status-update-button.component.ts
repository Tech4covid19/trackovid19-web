import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/states/user/state/user.service';

@Component({
  selector: 'app-cancel-status-update-button',
  templateUrl: './cancel-status-update-button.component.html',
  styleUrls: ['./cancel-status-update-button.component.scss'],
})
export class CancelStatusUpdateButtonComponent implements OnInit {
  showButton = true;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.showButton = user && user.latest_status && !this.userService.hasUserOutdatedStatus(user);
    });
  }

  onClose() {
    this.router.navigate(['/dashboard']);
  }
}
