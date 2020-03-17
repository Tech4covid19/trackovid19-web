import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnboardingComponent } from './onboarding.component';
import { CarouselComponent, CarouselItemElement } from './carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:[ 
      CommonModule,
      BrowserAnimationsModule
    ],
  declarations: [ OnboardingComponent, CarouselComponent, CarouselItemElement, CarouselItemDirective],
  exports: []
  
})
export class OnBoardingModule { }
 