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

describe('ShoppingCartListComponent', () => {
  let component: ShoppingCartListComponent;
  let fixture: ComponentFixture<ShoppingCartListComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
