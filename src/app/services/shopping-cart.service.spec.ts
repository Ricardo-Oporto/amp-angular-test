import { TestBed, inject } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-cart.service';
import { IShoppingItem } from '../models/shopping-item';

describe('ShoppingCartService', () => {
  const item: IShoppingItem = {
    name: 'biscuit',
    price: 5,
    quantity: 2
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartService]
    });
  });

  it('should be created', inject(
    [ShoppingCartService],
    (service: ShoppingCartService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should update the list when an item is added', inject(
    [ShoppingCartService],
    (service: ShoppingCartService) => {
      service.addItem(item);
      service.getlist().subscribe(i => {
        expect(i).toEqual([item]);
      });
    }
  ));
});
