import { Symptom } from "../symptom/symptom.model";
import { HealthState } from '../health-state/healt-state.model';

export class ConditionState {
    name: string;
    symptoms: Symptom[];
    health_states: HealthState[];

    constructor(public name_param: string, public symptoms_param: Symptom[], public health_states_param: HealthState[]) {
        this.name = name_param;
        this.symptoms = symptoms_param;
        this.health_states = health_states_param;
    }

    getConditionStateName() {
        return this.name;
    }
}