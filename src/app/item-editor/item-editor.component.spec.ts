import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemEditorComponent } from './item-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatOptionModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ItemEditorComponent', () => {
  let component: ItemEditorComponent;
  let fixture: ComponentFixture<ItemEditorComponent>;
  let addSpy;
  const item = {
    name: 'biscuit',
    price: 5,
    quantity: 2
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [ItemEditorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditorComponent);
    component = fixture.componentInstance;
    component.selectedItem = item;
    addSpy = spyOn(component.add, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value on add when form is valid', () => {
    component.shoppingItemForm.setErrors(null);
    component.onSubmit();
    expect(addSpy).toHaveBeenCalled();
  });

  it('should not emit value on add when form is valid', () => {
    component.shoppingItemForm.setErrors({ inValid: true });
    component.onSubmit();
    expect(addSpy).not.toHaveBeenCalled();
  });
});
