import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cardConfig = {
    card1: {
      icon: 'assets/img/illustrations/cards/heart.svg',
      text: 'Situaçao Regular',
      number: 156
    },
    card2: {
      icon: 'assets/img/illustrations/cards/user.svg',
      text: 'Quarentena Voluntária',
      number: 321
    },
    card3: {
      icon: 'assets/img/illustrations/cards/user.svg',
      text: 'Suspeitos',
      number: 58
    },
    card4: {
      icon: 'assets/img/illustrations/cards/green_heart.svg',
      text: 'Recuperados',
      number: 1
    },
    card5: {
      icon: 'assets/img/illustrations/cards/infected.svg',
      text: 'Infectados',
      number: 23
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
