import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from 'src/app/shared/guards/auth.guard';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canLoad: [AuthGuardService],
        children: [
          { path: '', redirectTo: 'status', pathMatch: 'full' },
          {
            path: 'status',
            loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
          },
          {
            path: 'change-state-step1',
            loadChildren: () =>
              import('../change-state-step1/change-state-step1.module').then(
                m => m.ChangeStateStep1Module,
              ),
          },
          {
            path: 'change-state-step2',
            loadChildren: () =>
              import('../change-state-step2/change-state-step2.module').then(
                m => m.ChangeStateStep2Module,
              ),
          },
          {
            path: 'change-state-step3',
            loadChildren: () =>
              import('../change-state-step3/change-state-step3.module').then(
                m => m.ChangeStateStep3Module,
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
