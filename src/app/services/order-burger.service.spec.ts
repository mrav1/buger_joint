import { TestBed } from '@angular/core/testing';

import { OrderBurgerService } from './order-burger.service';

describe('OrderBurgerService', () => {
  let service: OrderBurgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderBurgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
