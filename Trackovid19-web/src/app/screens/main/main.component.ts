import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';
import { ConfinementStateService } from '../../states/confinement-state/state/confinement-state.service';
import { User } from '../../states/user/state/user.model';
import { ConfinementState } from '../../states/confinement-state/state/confinement-state.model';
import { SubSink } from 'subsink';
import { ProfileServiceService } from 'src/app/shared/services/profile-service.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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
    private route: ActivatedRoute,
    private shareStateService: VideoStateService,
    private renderer: Renderer2,
  ) {
    this.toggleShareCallback = this.toggleShare.bind(this);

    let gdpr = localStorage.getItem('gdpr');
    gdpr = gdpr !== null ? JSON.parse(gdpr) : false;
    if (!gdpr) {
      this.router.navigate(['privacy-terms']);
    }
  }

  ngOnInit(): void {
    this.router.events.forEach(event => {
      if (
        event instanceof NavigationEnd &&
        (event.url.indexOf('/dashboard/status') !== -1 ||
          event.urlAfterRedirects.indexOf('/dashboard/status') !== -1)
      ) {
        const shareVal = localStorage.getItem('share');
        if (!shareVal || shareVal !== 'true') {
          this.showShare = true;
          this.renderer.setStyle(document.body, 'overflow-y', 'hidden');
          localStorage.setItem('share', 'true');
        }
      }
    });

    this.profileService.getProfileObs().subscribe(() => this.loadUser());
    this.shareStateService.get().subscribe(videos => {
      this.video = videos[Math.floor(Math.random() * Math.floor(videos.length))];
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private loadUser() {
    this.subs.add(
      this.userService.getUser().subscribe(user => {
        this.user = { ...user };
        this.loadState();
      }),
    );
  }

  private loadState() {
    this.subs.add(
      this.conditionService.get().subscribe((states: any[]) => {
        this.confinementState =
          states.find(state => state.id === +this.user.confinement_state) || null;
      }),
    );
  }

  public isChangingStep() {
    return this.router.url.indexOf('change-state-step') !== -1;
  }

  public toggleShare() {
    this.showShare = !this.showShare;
    if (this.showShare) {
      this.renderer.setStyle(document.body, 'overflow-y', 'hidden');
    } else {
      this.renderer.setStyle(document.body, 'overflow-y', 'auto');
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
