import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { ChangeStateStep3Component } from './change-state-step3.component';

const routes = [{ path: '', component: ChangeStateStep3Component }];

@NgModule({
  declarations: [ChangeStateStep3Component],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ChangeStateStep3Module {}
