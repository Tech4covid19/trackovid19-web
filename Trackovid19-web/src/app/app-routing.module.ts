import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from 'src/app/screens/logout/logout.component';
import { ChangeStateStep1Component } from './screens/change-state-step1/change-state-step1.component';
import { ChangeStateStep2Component } from './screens/change-state-step2/change-state-step2.component';
import { ChangeStateStep3Component } from './screens/change-state-step3/change-state-step3.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { MainComponent } from './screens/main/main.component';
import { PostCodeComponent } from './screens/post-code/post-code.component';
import { PrivacyPolicyComponent } from './screens/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './screens/terms-conditions/terms-conditions.component';
import { AuthGuardService } from './shared/guards/auth.guard';
import { OauthCallbackComponent } from './shared/oauth-component/oauth-callback.component';
import { OnboardingComponent } from './screens/onboarding/onboarding.component';
import { PrivacyTermsComponent } from './screens/privacy-terms/privacy-terms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/status',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
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
    component: PostCodeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'privacy-terms',
    component: PrivacyTermsComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent,
  },
  {
    path: 'onboarding',
    component: OnboardingComponent,
  },
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      {
        path: 'status',
        component: HomeComponent,
      },
      {
        path: 'change-state-step1',
        component: ChangeStateStep1Component,
      },
      {
        path: 'change-state-step2',
        component: ChangeStateStep2Component,
      },
      {
        path: 'change-state-step3',
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
