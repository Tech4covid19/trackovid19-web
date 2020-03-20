import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe();
  }
}
