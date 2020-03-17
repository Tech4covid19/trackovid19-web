import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { ChangeStateComponent } from './screens/change-state/change-state.component';
import { MainComponent } from './screens/main/main.component';
import { PostCodeComponent } from './screens/post-code/post-code.component';
import { ChangeStateStep1Component } from './screens/change-state-step1/change-state-step1.component';

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
  {path: 'change-state', component: ChangeStateComponent},
  {path: 'change-state-step1', component: ChangeStateStep1Component},
  {path: 'post-code', component: PostCodeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
