import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './shared/guards/auth.guard';
import { LogoutComponent } from 'src/app/screens/logout/logout.component';
import { OauthCallbackComponent } from './shared/oauth-component/oauth-callback.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/status',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'post-code',
    component: OauthCallbackComponent,
  },
  {
    path: 'post-code-step',
    loadChildren: () => import('./screens/post-code/post-code.module').then(m => m.PostCodeModule),
    canLoad: [AuthGuardService],
  },
  {
    path: 'privacy-terms',
    loadChildren: () =>
      import('./screens/privacy-terms/privacy-terms.module').then(m => m.PrivacyTermsModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./screens/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule),
  },
  {
    path: 'terms-conditions',
    loadChildren: () =>
      import('./screens/terms-conditions/terms-conditions.module').then(
        m => m.TermsConditionsModule,
      ),
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('./screens/onboarding/onboarding.module').then(m => m.OnBoardingModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./screens/main/main.module').then(m => m.MainModule),
    canLoad: [AuthGuardService],
    /*
    // to trigger user details request and update the store
    // if user is authenticated
    resolve: {
      user: UserResolver
    },*/
  },
  {
    path: '**',
    loadChildren: () => import('./screens/not-found/not-found.module').then(m => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
