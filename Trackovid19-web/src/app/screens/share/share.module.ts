import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareComponent } from './share.component';

const routes = [{ path: '', component: ShareComponent }];

@NgModule({
  declarations: [ShareComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ShareModule {}
