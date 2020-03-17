import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { ChangeStateComponent } from './screens/change-state/change-state.component';
import { MainComponent } from './screens/main/main.component';
import { GeolocalizationService } from './shared/services/geolocalization.service';
import { HttpClientModule } from '@angular/common/http';
import { OnBoardingModule } from './screens/onboarding/onboarding.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ChangeStateComponent,
    MainComponent,
  


  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FlexLayoutModule,
    OnBoardingModule,
    SharedModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot(),
    
  ],
  providers: [
    // GeolocalizationService,
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: environment.apiUrl }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
