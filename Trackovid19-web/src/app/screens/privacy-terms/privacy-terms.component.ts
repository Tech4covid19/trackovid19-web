import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from '../../states/user/state/user.service';
import { User } from '../../states/user/state/user.model';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from '../../shared/services/notification-service.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-privacy-terms',
  templateUrl: './privacy-terms.component.html',
  styleUrls: ['./privacy-terms.component.scss'],
})
export class PrivacyTermsComponent implements OnInit {
  @ViewChild('conditions', { static: true }) conditions: TemplateRef<any>;
  @ViewChild('policy', { static: true }) policy: TemplateRef<any>;

  sub: PushSubscription;

  readonly VAPID_PUBLIC_KEY = environment.serverPublicKey;

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

  constructor(
    private userService: UserService,
    private router: Router,
    private swPush: SwPush,
    private notificationService: NotificationService,
  ) {}

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

  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then(sub => {
        this.sub = sub;

        console.log('Notification Subscription: ', sub);

        this.notificationService.addPushSubscriber(sub).subscribe(
          () => console.log('Sent push subscription object to server.'),
          err => console.log('Could not send subscription object to server, reason: ', err),
        );
      })
      .catch(err => console.error('Could not subscribe to notifications', err));
  }

  sendNewsletter() {
    console.log('Sending Newsletter to all Subscribers ...');

    this.notificationService.send().subscribe();
  }
}
