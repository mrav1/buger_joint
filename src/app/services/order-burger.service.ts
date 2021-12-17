import { Injectable } from '@angular/core';
import { Burger } from '../models/burger';
import { Order } from '../models/order';
import { User } from '../models/user';
import { BurgerPriceService } from './burger-price.service';
import { StoreService } from './store.service';

const ORDERS_KEY = 'orders';
const SALES_KEY = 'sales';

@Injectable({
  providedIn: 'root'
})
export class OrderBurgerService {

  constructor(
    private burgerPriceService: BurgerPriceService,
    private store: StoreService
  ) { }

  placeOrder(burger: Burger, user: User) {
    const price = this.burgerPriceService.getBurgerPrice(burger);
    let order = new Order({ burger, user, price });
    order.orderId = new Date().getTime();
    order.orderedOn = new Date()

    this.saveOrder(order);

    // Update total sales
    this.updateTotalSales(price);

  }

  getOrders(): Order[] {
    return this.store.getJson(ORDERS_KEY);
  }

  searchOrdersByUser(key: string){
    let orders: Order[] = this.getOrders();
    return orders.filter(order => {
      return order.user.name.indexOf(key) != -1 || order.user.email.indexOf(key) != -1 || order.user?.phone.indexOf(key) != -1
    }) 
  }

  private updateTotalSales(price: number) {
    let sales: any = this.store.get(SALES_KEY);
    if (sales) {
      sales = parseInt(sales);
    } else
      sales = 0;

    sales += price;

    this.store.put(SALES_KEY, sales);
  }

  private saveOrder(order: Order) {
    let orders = this.getOrders();
    if (!orders) {
      orders = [];
    }
    orders.push(order);
    this.store.putJson(ORDERS_KEY, orders)
  }

  getSales(){
    return this.store.get(SALES_KEY);
  }

}
