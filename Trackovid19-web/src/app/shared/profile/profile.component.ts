import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../../states/user/state/user.model';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from '../services/notification-service.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnChanges {
  @Input() user: User = null;

  sub: PushSubscription;

  readonly VAPID_PUBLIC_KEY = environment.serverPublicKey;

  constructor(private swPush: SwPush, private notificationService: NotificationService) {}

  ngOnChanges(): void {
    // TODO
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
