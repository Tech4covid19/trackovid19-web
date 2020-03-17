import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
    templateUrl: './onboarding-view.component.html',
    styleUrls: ['./onboarding-view.component.scss']
})
export class OnboardingViewComponent {
    @ViewChild(IonSlides, { static: false })
    public set ionSlides(ionSlides: IonSlides) {
        this._ionSlides = ionSlides;
        this._ionSlides.lockSwipeToPrev(true);
    }

    public get ionSlides(): IonSlides {
        return this._ionSlides;
    }

    private _ionSlides: IonSlides;

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
        this._ionSlides.length().then((length: number) => {
            if (index === length - 1) {
                this.router.navigate(['dashboard']);
            } else {
                this._ionSlides.slideNext();
            }
        });
    }
}
