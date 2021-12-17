export class User {
    name!: string;
    phone: string = "";
    email!: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
