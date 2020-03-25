import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { ChangeStateStep1Module } from '../change-state-step1/change-state-step1.module';
import { ChangeStateStep2Module } from '../change-state-step2/change-state-step2.module';
import { ChangeStateStep3Module } from '../change-state-step3/change-state-step3.module';
import { HomeModule } from '../home/home.module';

import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    SharedModule,
    ChangeStateStep1Module,
    ChangeStateStep2Module,
    ChangeStateStep3Module,
    HomeModule,
  ],
})
export class MainModule {}
