export class HealthState {
    id: number;
    name: string;
    actual_state: boolean;

    constructor(public name_param: string, public id_param: number) {
        this.id = id_param;
        this.name = name_param;
        this.actual_state = false;
    }
}