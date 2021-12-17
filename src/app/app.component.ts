import { Component } from '@angular/core';
import { Burger } from './models/burger';
import { Order } from './models/order';
import { User } from './models/user';
import { OrderBurgerService } from './services/order-burger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //sales: any = 0;
  searchResults: Order[] = [];

  burger = new Burger();

  constructor(private burgerSvc: OrderBurgerService) {

  }

  searchOrders(key: string): any {
    if (!key) return []
    this.searchResults = this.burgerSvc.searchOrdersByUser(key)
  }

  get orders() {
    return this.burgerSvc.getOrders()
  }

  placeOrder(form: any){
    this.burgerSvc.placeOrder(new Burger(form.value), new User({name:form.value.user, email: form.value.user }));
    //this.sales = this.burgerSvc.getSales();
  }

  search(event: any){
    this.searchResults = this.burgerSvc.searchOrdersByUser(event.target.value)
  }

  get sales(){
    let sales = this.burgerSvc.getSales(); 
    if(!sales || sales == "0")
      return undefined
    else return sales
  }

}
