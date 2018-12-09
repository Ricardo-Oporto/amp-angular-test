import { Injectable } from '@angular/core';
import { IShoppingItem } from '../models/shopping-item';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  private _list$ = new BehaviorSubject<IShoppingItem[]>([]);

  public addItem = (item: IShoppingItem) => {
    item.id = this._list$.getValue().length;
    this._list$.next([...this._list$.getValue(), Object.assign({}, item)]);
  };

  getlist$ = () => {
    return this._list$.asObservable();
  };
}
