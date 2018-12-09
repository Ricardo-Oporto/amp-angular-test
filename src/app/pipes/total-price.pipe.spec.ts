import { TotalPricePipe } from './total-price.pipe';
import { IShoppingItem } from '../models/shopping-item';

describe('TotalPricePipe', () => {
  it('create an instance', () => {
    const pipe = new TotalPricePipe();
    expect(pipe).toBeTruthy();
  });

  it('should calculate the total amount of items', () => {
    const pipe = new TotalPricePipe();
    expect(
      pipe.transform([
        { price: 3, quantity: 5 },
        { price: 2, quantity: 4 }
      ] as IShoppingItem[])
    ).toBe(23);
  });
});
