import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { ChangeStateComponent } from './screens/change-state/change-state.component';
import {MainComponent} from './screens/main/main.component';
import { PostCodeComponent } from './screens/post-code/post-code.component';
import { AuthGuardService } from './shared/guards/auth.guard';
import { OauthCallbackComponent } from './shared/oauth-component/oauth-callback.component';
import { UserResolver } from './shared/resolvers/user-data.resolver';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'post-code',
    component: OauthCallbackComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
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
    path: 'change-state',
    component: ChangeStateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'post-code',
    component: PostCodeComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
