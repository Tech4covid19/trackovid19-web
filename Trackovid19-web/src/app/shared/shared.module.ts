import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { StatusBtnComponent } from './status-btn/status-btn.component';
import { ProfileComponent } from './profile/profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StateChangeCardComponent } from './state-change-card/state-change-card.component';



@NgModule({
  declarations: [CardComponent, StatusBtnComponent, ProfileComponent, StateChangeCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports:[CardComponent, StatusBtnComponent, ProfileComponent,StateChangeCardComponent]
})
export class SharedModule { }
