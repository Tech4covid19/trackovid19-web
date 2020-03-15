import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
//Onboarding Imports
import { OnboardingComponent } from './screens/onboarding/onboarding.component';
import { CarouselComponent, CarouselItemElement } from "./screens/onboarding/carousel.component";
import { CarouselItemDirective } from './screens/onboarding/carousel-item.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ChangeStateComponent,
    OnboardingComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule.forRoot()
  ],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
