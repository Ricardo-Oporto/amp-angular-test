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

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
