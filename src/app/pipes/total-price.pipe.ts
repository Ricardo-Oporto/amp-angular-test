import { Pipe, PipeTransform } from '@angular/core';
import { IShoppingItem } from '../models/shopping-item';

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {
  transform(items: IShoppingItem[]): any {
    return items.reduce(
      (a: number, b: IShoppingItem) => a + b.price * b.quantity,
      0
    );
  }
}
