export class Burger {
    
    buns: number = 2;
    cheeseSlices: number = 1;
    salads: boolean = true;
    cutlets: number = 1;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }

}
