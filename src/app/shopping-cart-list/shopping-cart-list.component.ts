import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatTable
} from '@angular/material';
import { IShoppingItem } from '../models/shopping-item';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit, OnChanges {
  @Input() items: IShoppingItem[];
  @Output() remove = new EventEmitter<IShoppingItem>();
  displayedColumns: string[] = ['name', 'quantity', 'price', 'remove'];
  dataSource: MatTableDataSource<IShoppingItem>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.items);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, text) => {
      return data.category.some(category =>
        category.toLowerCase().includes(text.toLowerCase())
      );
    };
    this.table.dataSource = this.dataSource;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnChanges(changes: any) {
    this.dataSource.data = this.items;
  }

  removeRow = (rowItem: IShoppingItem) => {
    this.remove.emit(rowItem);
  };
}
