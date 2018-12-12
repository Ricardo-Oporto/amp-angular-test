import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IShoppingItem } from '../models/shopping-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { inventory } from '../../assets/grocery';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {
  @Output() add = new EventEmitter<IShoppingItem>();
  inventory = inventory;
  selectedItem = inventory[0];

  shoppingItemForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    quantity: new FormControl(''),
    price: new FormControl('')
  });
  constructor() {}

  onSubmit = () => {
    if (this.shoppingItemForm.valid) {
      this.add.emit(this.selectedItem);
    }
  };

  ngOnInit() {}
}
