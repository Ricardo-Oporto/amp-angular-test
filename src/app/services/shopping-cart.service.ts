import { Injectable } from '@angular/core';
import { IShoppingItem } from '../models/shopping-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  private _list$ = new BehaviorSubject<IShoppingItem[]>([]);

  public addItem = (item: IShoppingItem) => {
    this._list$.next([
      ...this._list$.getValue(),
      Object.assign({}, item, { id: this._list$.getValue().length })
    ]);
  };

  removeItem = (item: IShoppingItem) => {
    this._list$.next(this._list$.getValue().filter(i => i.id !== item.id));
  };

  getlist = () => {
    return this._list$.asObservable();
  };
}
