import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { MainComponent } from './screens/main/main.component';
import { ChangeStateStep1Component } from './screens/change-state-step1/change-state-step1.component';
import { ChangeStateStep2Component } from './screens/change-state-step2/change-state-step2.component';
import { ChangeStateStep3Component } from './screens/change-state-step3/change-state-step3.component';
import { OauthCallbackComponent } from './shared/oauth-component/oauth-callback.component';
import { AuthGuardService } from './shared/guards/auth.guard';
import { PostCodeComponent } from './screens/post-code/post-code.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'post-code',
    component: OauthCallbackComponent,
  },
  {
    path: 'post-code-step',
    component: PostCodeComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: 'post-code2',
    loadChildren: () => import('./screens/post-code/post-code.module').then(m => m.PostCodeModule),
  },
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {
        path: 'status',
        outlet: 'dash',
        component: HomeComponent,
      },
      {
        path: 'change-state-step1',
        outlet: 'dash',
        component: ChangeStateStep1Component,
      },
      {
        path: 'change-state-step2',
        outlet: 'dash',
        component: ChangeStateStep2Component,
      },
      {
        path: 'change-state-step3',
        outlet: 'dash',
        component: ChangeStateStep3Component,
      },
    ],
    canActivate: [AuthGuardService],
    /*
    // to trigger user details request and update the store
    // if user is authenticated
    resolve: {
      user: UserResolver
    },*/
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
