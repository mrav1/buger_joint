import { TestBed } from '@angular/core/testing';

import { BurgerPriceService } from './burger-price.service';

describe('BurgerPriceService', () => {
  let service: BurgerPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
