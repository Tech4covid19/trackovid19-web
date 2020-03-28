import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { ChangeStateStep1Component } from './change-state-step1.component';

const routes = [{ path: '', component: ChangeStateStep1Component }];

@NgModule({
  declarations: [ChangeStateStep1Component],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ChangeStateStep1Module {}
