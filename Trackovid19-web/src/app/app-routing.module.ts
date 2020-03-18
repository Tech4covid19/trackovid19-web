import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { MainComponent } from './screens/main/main.component';
import { PostCodeComponent } from './screens/post-code/post-code.component';
import { ChangeStateStep1Component } from './screens/change-state-step1/change-state-step1.component';
import { ChangeStateStep2Component } from './screens/change-state-step2/change-state-step2.component';
import { ChangeStateStep3Component } from './screens/change-state-step3/change-state-step3.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    // auth guard
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {path: 'change-state-step1', component: ChangeStateStep1Component},
  {path: 'change-state-step2', component: ChangeStateStep2Component},
  {path: 'change-state-step3', component: ChangeStateStep3Component},
  {path: 'post-code', component: PostCodeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
