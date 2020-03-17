import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { StatusBtnComponent } from './status-btn/status-btn.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileStatusComponent } from './profile-status/profile-status.component';
import { LocationStatusComponent } from './location-status/location-status.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StateChangeCardComponent } from './state-change-card/state-change-card.component';
import { StateConfirmBtnComponent } from './state-confirm-btn/state-confirm-btn.component';



@NgModule({

  declarations: [CardComponent, StatusBtnComponent, ProfileComponent, ProfileStatusComponent, LocationStatusComponent, StateChangeCardComponent, StateConfirmBtnComponent],

  imports: [
    CommonModule,
    FlexLayoutModule,
  ],

  exports:[CardComponent, StatusBtnComponent, ProfileComponent, ProfileStatusComponent, LocationStatusComponent, StateChangeCardComponent, StateConfirmBtnComponent]

})
export class SharedModule { }
