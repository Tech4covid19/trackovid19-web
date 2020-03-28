import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { OnBoardingModule } from './screens/onboarding/onboarding.module';
import { PostCodeModule } from './screens/post-code/post-code.module';
import { PrivacyPolicyModule } from './screens/privacy-policy/privacy-policy.module';
import { PrivacyTermsModule } from './screens/privacy-terms/privacy-terms.module';
import { TermsConditionsModule } from './screens/terms-conditions/terms-conditions.module';

import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { GeolocalizationService } from './shared/services/geolocalization.service';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LogoutComponent } from 'src/app/screens/logout/logout.component';

@NgModule({
  declarations: [AppComponent, LogoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    OnBoardingModule,
    PostCodeModule,
    PrivacyPolicyModule,
    PrivacyTermsModule,
    TermsConditionsModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    FormsModule,
  ],
  providers: [
    GeolocalizationService,
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: environment.apiUrl } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
