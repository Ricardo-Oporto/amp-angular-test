import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { IShoppingItem } from '../models/shopping-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  list: Observable<IShoppingItem[]>;
  constructor(private shoppingCartService: ShoppingCartService) {
    this.list = shoppingCartService.getlist$();
  }

  ngOnInit() {}

  addItem = (item: IShoppingItem) => {
    this.shoppingCartService.addItem(item);
  };
}
