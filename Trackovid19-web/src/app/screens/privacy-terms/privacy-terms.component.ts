import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-terms',
  templateUrl: './privacy-terms.component.html',
  styleUrls: ['./privacy-terms.component.scss'],
})
export class PrivacyTermsComponent {
  linkCards = [
    {
      label: 'Termos e Condições',
      url: '/terms-conditions',
    },
    {
      label: 'Política de Privacidade',
      url: '/privacy-policy',
    },
  ];
  accepted1 = false;
  accepted2 = false;
  accepted3 = false;
  accepted4 = false;

  constructor() {}

  public onClickTerms1(event) {
    this.accepted1 = !this.accepted1;
    event.preventDefault();
  }

  public onClickTerms2(event) {
    this.accepted2 = !this.accepted2;
    event.preventDefault();
  }

  public onClickTerms3(event) {
    this.accepted3 = !this.accepted3;
    event.preventDefault();
  }

  public onClickTerms4(event) {
    this.accepted4 = !this.accepted4;
    event.preventDefault();
  }
}
