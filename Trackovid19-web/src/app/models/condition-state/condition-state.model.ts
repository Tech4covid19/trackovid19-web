import { Symptom } from "../symptom/symptom.model";

export class ConditionState {
    name: string;
    symptoms: Symptom[];

    constructor(public name_param: string, public symptoms_param: Symptom[]) {
        this.name = name_param;
        this.symptoms = symptoms_param;
    }

    getConditionStateName() {
        return this.name;
    }
}