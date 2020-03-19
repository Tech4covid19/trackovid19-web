import { Symptom } from "../symptom/symptom.model";
import { HealthState } from '../health-state/healt-state.model';
import { ActivityState } from '../activity-state/activity-state.model';

export class ConditionState {
    name: string;
    symptoms: Symptom[];
    health_states: HealthState[];
    activity_states: ActivityState[];

    constructor(
        public name_param: string, 
        public symptoms_param: Symptom[], 
        public health_states_param: HealthState[],
        public activity_states_param: ActivityState[] ) {

        this.name = name_param;
        this.symptoms = symptoms_param;
        this.health_states = health_states_param;
        this.activity_states = activity_states_param;
        
    }

    getConditionStateName() {
        return this.name;
    }
}