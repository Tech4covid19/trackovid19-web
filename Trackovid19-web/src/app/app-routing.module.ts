import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { ChangeStateComponent } from './screens/change-state/change-state.component';

import { DashboardComponent } from './screens/dashboard/dashboard.component';


const routes: Routes = [
  
  {
    path: '',
    // auth guard
    component: DashboardComponent,
    
  },
  {path: 'login', component: LoginComponent},
  {path: 'change-state', component: ChangeStateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
