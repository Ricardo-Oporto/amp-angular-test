import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
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
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';
import { TotalPricePipe } from './pipes/total-price.pipe';
describe('AppComponent', () => {
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
        TotalPricePipe,
        AppComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
