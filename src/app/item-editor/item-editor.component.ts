import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IShoppingItem } from '../models/shopping-item';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {
  @Output() add = new EventEmitter<IShoppingItem>();

  shoppingItemForm = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl('')
  });
  constructor() {}

  onSubmit() {
    this.add.emit(this.shoppingItemForm.value);
  }

  ngOnInit() {}
}
