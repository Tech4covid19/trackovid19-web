import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from '../../states/user/state/user.service';
import { User } from '../../states/user/state/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-terms',
  templateUrl: './privacy-terms.component.html',
  styleUrls: ['./privacy-terms.component.scss'],
})
export class PrivacyTermsComponent implements OnInit {
  @ViewChild('conditions', { static: true }) conditions: TemplateRef<any>;
  @ViewChild('policy', { static: true }) policy: TemplateRef<any>;

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
  showModal = false;

  template: any = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  accept() {
    const optIn: Partial<User> = {
      optin_download_use: true,
      optin_health_geo: true,
      optin_privacy: true,
      optin_push: true,
    };
    this.userService.updateUserInformation(optIn).subscribe(
      success => {
        localStorage.setItem('gdpr', JSON.stringify(true));
        this.router.navigate(['/dashboard', 'change-state-step1']);
      },
      err => alert(`Ooops!\n${err.message || err}`),
    );
  }

  onClickTerms1(event) {
    this.accepted1 = !this.accepted1;
    event.preventDefault();
  }

  onClickTerms2(event) {
    this.accepted2 = !this.accepted2;
    event.preventDefault();
  }

  onClickTerms3(event) {
    this.accepted3 = !this.accepted3;
    event.preventDefault();
  }
}
