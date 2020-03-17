import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'step-data-protection',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss']
})
export class StepDataProtectionComponent {
    @Input()
    public thumbnail: string;

    @Input()
    public title: string;

    @Input()
    public text: string;

    @Output()
    public nextStep: EventEmitter<void> = new EventEmitter();

    public onNextStep() {
        this.nextStep.emit();
    }
}
