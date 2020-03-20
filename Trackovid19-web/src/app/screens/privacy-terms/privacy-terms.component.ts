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
}
