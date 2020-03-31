import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';
import { ConfinementStateService } from '../../states/confinement-state/state/confinement-state.service';
import { User } from '../../states/user/state/user.model';
import { ConfinementState } from '../../states/confinement-state/state/confinement-state.model';
import { SubSink } from 'subsink';
import { ProfileServiceService } from 'src/app/shared/services/profile-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { VideoStateService } from '../../states/video/video-state.service';
import { VideoState } from 'src/app/states/video/video-state.model';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from '../../shared/services/notification-service.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  user: User = null;
  video: VideoState = null;
  confinementState: ConfinementState = null;
  showShare = false;
  showNotificationModal = false;
  showConfirmDeleteUserModal = false;
  sub: PushSubscription;

  readonly VAPID_PUBLIC_KEY = environment.serverPublicKey;

  private subs = new SubSink();

  public toggleShareCallback: Function;
  public toggleNotificationModalCallback: Function;
  public toggleConfirmDeleteUserModalCallback: Function;
  public subscribeToNotificationsCallback: Function;

  constructor(
    private router: Router,
    private userService: UserService,
    private conditionService: ConfinementStateService,
    private profileService: ProfileServiceService,
    private shareStateService: VideoStateService,
    private renderer: Renderer2,
    private swPush: SwPush,
    private notificationService: NotificationService,
  ) {
    this.toggleShareCallback = this.toggleShare.bind(this);
    this.toggleNotificationModalCallback = this.toggleNotification.bind(this);
    this.toggleConfirmDeleteUserModalCallback = this.toggleConfirmDeleteUser.bind(this);
    this.subscribeToNotificationsCallback = this.subscribeToNotifications.bind(this);

    router.events.forEach(event => {
      if (event instanceof NavigationEnd && event.url.indexOf('/dashboard/status') !== -1) {
        const shareVal = localStorage.getItem('share');
        if (shareVal && shareVal === 'true') {
          this.showShare = true;
          localStorage.setItem('share', 'false');
        }
      }
    });

    let gdpr = localStorage.getItem('gdpr');
    gdpr = gdpr !== null ? JSON.parse(gdpr) : false;
    if (!gdpr) {
      this.router.navigate(['privacy-terms']);
    }
  }

  ngOnInit(): void {
    this.profileService.getProfileObs().subscribe(() => this.loadUser());
    this.shareStateService.get().subscribe(videos => {
      this.video = videos[Math.floor(Math.random() * Math.floor(videos.length))];
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private hasUserOutdatedStatus(lastUpdate) {
    const oneDayBehindTime = new Date().getTime() - 1 * 24 * 60 * 60 * 1000; // 1day 24hour  60min  60sec  1000msec
    const lastUpdateTime = new Date(lastUpdate).getTime(); // we need the timestamp to match the difference

    return oneDayBehindTime > lastUpdateTime;
  }

  private loadState() {
    this.subs.add(
      this.conditionService.get().subscribe((states: any[]) => {
        this.confinementState =
          states.find(state => state.id === +this.user.confinement_state) || null;
      }),
    );
  }

  private loadUser() {
    this.subs.add(
      this.userService.getUser().subscribe(user => {
        this.user = { ...user };
        this.loadState();

        if (user.latest_status && this.hasUserOutdatedStatus(user.latest_status.timestamp)) {
          this.router.navigate(['/dashboard', 'change-state-step1']);
        }
      }),
    );
  }

  public isChangingStep() {
    return this.router.url.indexOf('change-state-step') !== -1;
  }

  public async subscribeToNotifications() {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      this.swPush
        .requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY,
        })
        .then(sub => {
          this.sub = sub;

          this.notificationService.addPushSubscriber(sub).subscribe(
            () => console.log('Sent push subscription object to server.'),
            err => console.log('Could not send subscription object to server, reason: ', err),
            () => this.toggleNotification(),
          );
        })
        .catch(err => {
          this.toggleNotification();
          console.error('Could not subscribe to notifications', err);
        });
    } else {
      this.toggleNotification();
    }
  }

  public showNotifications() {
    if ('serviceWorker' in navigator && Notification.permission === 'default') {
      this.showNotificationModal = true;
    }
  }

  public showShareModal() {
    this.showShare = true;
  }

  public toggleShare() {
    this.showShare = !this.showShare;
    setTimeout(() => {
      this.showNotifications();
    }, 1000);
  }

  public toggleNotification() {
    this.showNotificationModal = false;
  }

  public showConfirmDeleteUser() {
    this.showConfirmDeleteUserModal = true;
  }

  public toggleConfirmDeleteUser() {
    this.showConfirmDeleteUserModal = !this.showConfirmDeleteUserModal;
  }
}
