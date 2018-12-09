import { Injectable } from '@angular/core';
import { IShoppingItem } from '../models/shopping-item';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  private _list$ = new BehaviorSubject<IShoppingItem[]>([]);

  public addItem = (item: IShoppingItem) => {
    this._list$.next([...this._list$.getValue(), item]);
  };

  getlist$ = () => {
    return this._list$.asObservable();
  };
}
