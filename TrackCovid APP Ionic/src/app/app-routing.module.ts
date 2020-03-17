import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [

    {
        path: '',
        loadChildren: () =>
            import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'onboarding',
        loadChildren: () =>
            import('./onboarding-view/onboarding-view.module').then(
                m => m.OnboardingViewModule
            )
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./tabs/tabs.module').then(m => m.TabsPageModule)
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
