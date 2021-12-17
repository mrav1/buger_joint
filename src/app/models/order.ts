import { Burger } from './burger';
import { User } from './user';

export class Order {
    burger!: Burger;
    user!: User;
    price: number = 0;
    orderId: number  = 0;
    orderedOn!: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
