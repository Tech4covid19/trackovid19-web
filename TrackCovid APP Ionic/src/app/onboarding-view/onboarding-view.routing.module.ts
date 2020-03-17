import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingViewComponent } from 'src/app/onboarding-view/components/onboarding-view.component';

const routes: Routes = [
    {
        path: '',
        component: OnboardingViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OnboardingViewRoutingModule {}
