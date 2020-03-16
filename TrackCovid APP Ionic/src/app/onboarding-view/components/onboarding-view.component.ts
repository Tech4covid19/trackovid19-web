import { Component, ViewChildren, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    templateUrl: './onboarding-view.component.html',
    styleUrls: ['./onboarding-view.component.scss']
})
export class OnboardingViewComponent {
    @ViewChild(IonSlides, { static: false })
    public ionSlides: IonSlides;

    constructor(private router: Router) {}

    public stepsData = [
        {
            thumbnail: 'assets/onboarding/step-data-protection.png',
            title: 'Proteção de dados',
            text:
                'Os seus dados são anónimos e confidenciais.<br>Os seus contactos não terão acesso a seu estado.'
        },
        {
            thumbnail: 'assets/onboarding/step-update-status.png',
            title: 'Atualize o seu estado',
            text:
                'Reporte o seu estado de saúde e atividade e atualize-o<br />sempre que este se alterar.'
        },
        {
            thumbnail: 'assets/onboarding/step-area.png',
            title: 'Consulte a situação da sua área',
            text:
                'Saiba qual é o potencial de infeção<br />na sua área geográfica.'
        }
    ];

    public onNextStep(index: number) {
        this.ionSlides.length().then((length: number) => {
            if (index === length - 1) {
                this.router.navigate(['dashboard']);
            } else {
                this.ionSlides.slideNext();
            }
        });
    }
}
