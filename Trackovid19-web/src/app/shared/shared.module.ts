import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { StatusBtnComponent } from './status-btn/status-btn.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileStatusComponent } from './profile-status/profile-status.component';
import { LocationStatusComponent } from './location-status/location-status.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RadioCardComponent } from './radio-card/radio-card.component';
import { StateConfirmBtnComponent } from './state-confirm-btn/state-confirm-btn.component';
import { CheckboxCardComponent } from './checkbox-card/checkbox-card.component';
import { AuthGuardService } from './guards/auth.guard';
import { UserResolver } from './resolvers/user-data.resolver';
import { StatusPipe } from './pipes/status.pipe';
import { IsolationStatusComponent } from './isolation-status/isolation-status.component';
import { IconPlaceholderPipe } from './pipes/icon-placeholder.pipe';
import { StatusConfinementPipe } from './pipes/status-confinement.pipe';
import { IconPlaceholderConfinementPipe } from './pipes/icon-placeholder-confinement.pipe';
import { StepsComponent } from './steps/steps.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { ShareStatusComponent } from './share-status/share-status.component';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { NotificationsModalComponent } from './notifications-modal/notifications-modal.component';

@NgModule({
  declarations: [
    CardComponent,
    StatusBtnComponent,
    ProfileComponent,
    ProfileStatusComponent,
    LocationStatusComponent,
    RadioCardComponent,
    LocationInfoComponent,
    StateConfirmBtnComponent,
    CheckboxCardComponent,
    IsolationStatusComponent,
    IconPlaceholderPipe,
    StatusPipe,
    StatusConfinementPipe,
    IconPlaceholderConfinementPipe,
    StepsComponent,
    LinkCardComponent,
    ShareStatusComponent,
    BasicModalComponent,
    NotificationsModalComponent,
  ],
  imports: [CommonModule, FlexLayoutModule, FormsModule],
  exports: [
    CardComponent,
    StatusBtnComponent,
    ProfileComponent,
    ProfileStatusComponent,
    LocationStatusComponent,
    LocationInfoComponent,
    RadioCardComponent,
    StateConfirmBtnComponent,
    CheckboxCardComponent,
    IsolationStatusComponent,
    StepsComponent,
    LinkCardComponent,
    ShareStatusComponent,
    BasicModalComponent,
    NotificationsModalComponent,
  ],
  providers: [AuthGuardService, UserResolver],
})
export class SharedModule {}
