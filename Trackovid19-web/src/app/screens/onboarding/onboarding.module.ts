import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarouselItemDirective } from './carousel-item.directive';
import { OnboardingComponent } from './onboarding.component';
import { CarouselComponent, CarouselItemElement } from './carousel.component';

const routes = [{ path: '', component: OnboardingComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    OnboardingComponent,
    CarouselComponent,
    CarouselItemElement,
    CarouselItemDirective,
  ],
  exports: [],
})
export class OnBoardingModule {}
