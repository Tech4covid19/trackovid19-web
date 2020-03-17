import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ]

  frames = [
    {id: 1, logo: 'assets/img/logo/tracovid.svg', slider: 'assets/img/illustrations/intro/step1.svg', info: {title: 'Proteção de Dados', information: 'Os seus dados são anónimos e confidenciais.<br/> Os seus contactos não terão acesso a seu estado.'}},
    {id: 2, logo: 'assets/img/logo/tracovid.svg', slider: 'assets/img/illustrations/intro/step2.svg',info: {title: 'Atualize o seu estado', information: 'Reporte o seu estado de saúde e atividade e atualize-o sempre que este se alterar.'}},
    {id: 3, logo: 'assets/img/logo/tracovid.svg', slider: 'assets/img/illustrations/intro/step3.svg',info: {title: 'Consulte a situação da sua área', information: 'Saiba qual é o potencial de infeção na sua área geográfica.'}},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
