import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { ChangeStateComponent } from './screens/change-state/change-state.component';
import { OnboardingComponent } from './screens/onboarding/onboarding.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'profile', component: HomeComponent},
  {path: 'change-state', component: ChangeStateComponent},
  {path: 'onboarding', component: OnboardingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
