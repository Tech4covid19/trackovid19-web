import { Symptom } from '../symptom/symptom.model';
import { ConfinementState } from '../confinement-state/confinement-state.model';
import { Condition } from '../conditon/condition.model';

export class ConditionState {
  name: string;
  symptoms: Symptom[];
  conditions: Condition[];
  confinementStates: ConfinementState[];

  constructor(
    name: string,
    symptoms: Symptom[],
    conditions: Condition[],
    confinementStates: ConfinementState[],
  ) {
    this.name = name;
    this.symptoms = symptoms;
    this.conditions = conditions;
    this.confinementStates = confinementStates;
  }
}
