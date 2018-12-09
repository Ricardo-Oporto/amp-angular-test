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
    addSpy = spyOn(component.add, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value on add', () => {
    component.onSubmit();
    expect(addSpy).toHaveBeenCalled();
  });
});
