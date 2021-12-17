import { Injectable } from '@angular/core';
import { Burger } from '../models/burger';

@Injectable({
  providedIn: 'root'
})
export class BurgerPriceService {

  /**
   * Price for each 1 item
   */
  private PriceMap = {
    buns: 5,
    salads: 5,
    cheeseSlice: 1,
    cutlets: 2
  }

  constructor() { }

  getBurgerPrice(burger: Burger): number {
    let price = 0;
    price += burger.buns * this.PriceMap['buns'];
    price += burger.salads ? this.PriceMap['salads'] : 0;
    price += burger.cheeseSlices * this.PriceMap['cheeseSlice'];
    price += burger.cutlets * this.PriceMap['cutlets'];

    return price;
  }

}
