import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeStateStep1Component } from './screens/change-state-step1/change-state-step1.component';
import { ChangeStateStep2Component } from './screens/change-state-step2/change-state-step2.component';
import { ChangeStateStep3Component } from './screens/change-state-step3/change-state-step3.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { MainComponent } from './screens/main/main.component';
import { OnBoardingModule } from './screens/onboarding/onboarding.module';
import { PostCodeModule } from './screens/post-code/post-code.module';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { GeolocalizationService } from './shared/services/geolocalization.service';
import { PrivacyPolicyComponent } from './screens/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './screens/terms-conditions/terms-conditions.component';
import { LogoutComponent } from 'src/app/screens/logout/logout.component';
import { PrivacyTermsComponent } from './screens/privacy-terms/privacy-terms.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MainComponent,
    ChangeStateStep1Component,
    ChangeStateStep2Component,
    ChangeStateStep3Component,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    PrivacyTermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    OnBoardingModule,
    PostCodeModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    GeolocalizationService,
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: environment.apiUrl } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
