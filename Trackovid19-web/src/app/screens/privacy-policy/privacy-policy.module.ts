import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrivacyPolicyComponent } from './privacy-policy.component';

const routes = [{ path: '', component: PrivacyPolicyComponent }];

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PrivacyPolicyModule {}
