export class Symptom {
    id: number;
    name: String;
    selected: boolean;

    constructor(public name_param: string, public id_param: number) {
        this.id = id_param;
        this.name = name_param;
        this.selected = false;
    }
}