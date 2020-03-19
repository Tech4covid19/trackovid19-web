import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getUser().subscribe(res => (this.user = res));
  }
}
