import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IShoppingItem } from '../models/shopping-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {
  @Output() add = new EventEmitter<IShoppingItem>();

  shoppingItemForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    quantity: new FormControl(''),
    price: new FormControl('')
  });
  constructor() {}

  onSubmit() {
    if (this.shoppingItemForm.valid) {
      this.add.emit(this.shoppingItemForm.value);
    }
  }

  ngOnInit() {}
}
