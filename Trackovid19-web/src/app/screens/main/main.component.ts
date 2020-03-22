import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/states/user/state/user.service';
import { ConfinementStateService } from '../../states/confinement-state/state/confinement-state.service';
import { User } from '../../states/user/state/user.model';
import { ConfinementState } from '../../states/confinement-state/state/confinement-state.model';
import { SubSink } from 'subsink';
import { ProfileServiceService } from 'src/app/shared/services/profile-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  router: Router;
  user: User = null;
  confinementState: ConfinementState = null;
  showShare: boolean = false;

  private subs = new SubSink();

  constructor(
    private _router: Router,
    private userService: UserService,
    private conditionService: ConfinementStateService,
    private profileService: ProfileServiceService,
    private route: ActivatedRoute,
  ) {
    this.router = _router;

    const shareVal = this.route.snapshot.queryParamMap.get('share');
    if (shareVal && shareVal === 'true') {
      this.showShare = true;
    } else {
      this.router.navigate(['/dashboard', 'status']);
    }
  }

  ngOnInit(): void {
    //this.loadUser();
    this.profileService.getProfileObs().subscribe(() => this.loadUser());
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
  }

  public sendDeleteAccountEmail() {
    const email = 'info@covidografia.pt';
    const subject = 'Test';
    const emailBody = 'Hi Sample, ' + this.user.facebook_id;
    window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
  }
}
