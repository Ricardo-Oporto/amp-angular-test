import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartListComponent } from './shopping-cart-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatOptionModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ItemEditorComponent } from '../item-editor/item-editor.component';
import { TotalPricePipe } from '../pipes/total-price.pipe';
import { IShoppingItem } from '../models/shopping-item';

describe('ShoppingCartListComponent', () => {
  let component: ShoppingCartListComponent;
  let fixture: ComponentFixture<ShoppingCartListComponent>;
  let removeItemSpy;
  const item: IShoppingItem = {
    name: 'bread',
    price: 5,
    quantity: 2,
    category: ['dairy']
  };

  const item2: IShoppingItem = {
    name: 'biscuit',
    price: 3,
    quantity: 3,
    category: ['snack']
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
    fixture = TestBed.createComponent(ShoppingCartListComponent);
    component = fixture.componentInstance;
    removeItemSpy = spyOn(component.remove, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.dataSource).toBeTruthy();
  });

  it('should initialise data and controls', () => {
    component.ngOnInit();
    expect(component.dataSource.paginator).toEqual(component.paginator);
    expect(component.dataSource.sort).toEqual(component.sort);
    expect(component.table.dataSource).toEqual(component.dataSource);
  });

  it('should filter the data', () => {
    component.items = [item, item2];
    component.applyFilter('meat');
    expect(component.dataSource.filteredData.length).toEqual(0);
  });

  it('should update the data when changes are detected', () => {
    component.items = [item];
    component.ngOnChanges(null);
    expect(component.dataSource.data).toEqual([item]);
  });

  it('should notify an item is to be removed', () => {
    component.removeRow(item);
    expect(removeItemSpy).toHaveBeenCalledWith(item);
  });
});
