import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ShoppingCartListComponent } from '../shopping-cart-list/shopping-cart-list.component';
import { ItemEditorComponent } from '../item-editor/item-editor.component';
import {
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';

import { TotalPricePipe } from '../pipes/total-price.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable, of } from 'rxjs';
import { IShoppingItem } from '../models/shopping-item';
import { CommonModule } from '@angular/common';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let shoppingService: ShoppingCartService;
  let shoppingCartAddSpy;
  let shoppingCartRemoveSpy;
  let shoppingCartGetSpy;
  const item: IShoppingItem = {
    name: 'biscuit',
    price: 5,
    quantity: 2,
    category: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [
        ShoppingCartComponent,
        ShoppingCartListComponent,
        ItemEditorComponent,
        TotalPricePipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    shoppingService = TestBed.get(ShoppingCartService);
    shoppingCartAddSpy = spyOn(shoppingService, 'addItem').and.callThrough();
    shoppingCartRemoveSpy = spyOn(
      shoppingService,
      'removeItem'
    ).and.callThrough();
    shoppingCartGetSpy = spyOn(shoppingService, 'getlist').and.returnValue([
      item
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the shopping cart service when notified an item is to be added', () => {
    component.addItem(item);
    expect(shoppingCartAddSpy).toHaveBeenCalledWith(item);
  });

  it('should call the shopping cart service when notified an item is removed', () => {
    component.removeItem(item);
    expect(shoppingCartRemoveSpy).toHaveBeenCalledWith(item);
  });

  it('should update the list when an item is added', () => {
    component.addItem(item);

    component.list.subscribe(list => {
      expect(list).toEqual([item]);
    });
  });

  it('should update the list when an item is removed', () => {
    component.removeItem(item);

    component.list.subscribe(list => {
      expect(list).toEqual([]);
    });
  });
});
