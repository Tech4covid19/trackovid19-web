import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OnboardingViewComponent } from 'src/app/onboarding-view/components/onboarding-view.component';
import { StepDataProtectionComponent } from 'src/app/onboarding-view/components/step/step.component';
import { OnboardingViewRoutingModule } from 'src/app/onboarding-view/onboarding-view.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [OnboardingViewComponent, StepDataProtectionComponent],
    imports: [
        IonicModule,
        CommonModule,
        SharedModule,
        OnboardingViewRoutingModule
    ],
    exports: [OnboardingViewComponent]
})
export class OnboardingViewModule {}
