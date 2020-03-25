import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { ChangeStateStep2Component } from './change-state-step2.component';

const routes = [{ path: '', component: ChangeStateStep2Component }];

@NgModule({
  declarations: [ChangeStateStep2Component],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ChangeStateStep2Module {}
