import { NgModule } from '@angular/core';
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
    CheckboxCardComponent],

  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    CardComponent,
    StatusBtnComponent,
    ProfileComponent,
    ProfileStatusComponent,
    LocationStatusComponent,
    LocationInfoComponent,
    RadioCardComponent,
    StateConfirmBtnComponent,
    CheckboxCardComponent
  ],
})
export class SharedModule {}
