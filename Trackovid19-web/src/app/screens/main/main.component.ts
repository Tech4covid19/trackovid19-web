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

  private subs = new SubSink();

  public toggleShareCallback: Function;

  constructor(
    private router: Router,
    private userService: UserService,
    private conditionService: ConfinementStateService,
    private profileService: ProfileServiceService,
    private shareStateService: VideoStateService,
    private renderer: Renderer2,
  ) {
    this.toggleShareCallback = this.toggleShare.bind(this);

    router.events.forEach(event => {
      if (event instanceof NavigationEnd && event.url.indexOf('/dashboard/status') !== -1) {
        const shareVal = localStorage.getItem('share');
        if (shareVal && shareVal === 'true') {
          this.showShare = true;
          this.renderer.setStyle(document.body, 'overflow', 'hidden');
          this.renderer.setStyle(document.body, 'position', 'fixed');
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

        if (this.hasUserOutdatedStatus(user.updated_at)) {
          this.router.navigate(['/dashboard', 'change-state-step1']);
        }
      }),
    );
  }

  public isChangingStep() {
    return this.router.url.indexOf('change-state-step') !== -1;
  }

  public toggleShare() {
    this.showShare = !this.showShare;
    if (this.showShare) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
      this.renderer.setStyle(document.body, 'position', 'fixed');
    } else {
      this.renderer.setStyle(document.body, 'overflow', 'initial');
      this.renderer.setStyle(document.body, 'position', 'initial');
    }
  }

  public sendDeleteAccountEmail() {
    const email = 'remover@covidografia.pt';
    const subject = 'Pedido de Remoção de Conta e Dados Pessoais';
    const emailBody =
      'Desejo que a minha conta e os meus dados pessoais na aplicação covidografia sejam removidos com efeito imediato. Os meus identificadores são: %0D%0A' +
      `E-mail: ${this.user.email} %0D%0A` +
      `Id-notificação: personal-${this.user.personal_hash} %0D%0A` +
      `Id-dados: health-${this.user.health_hash}`;
    window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
  }
}
