import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';

import { PrivacyTermsComponent } from './privacy-terms.component';

const routes = [{ path: '', component: PrivacyTermsComponent }];

@NgModule({
  declarations: [PrivacyTermsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, SharedModule],
})
export class PrivacyTermsModule {}
