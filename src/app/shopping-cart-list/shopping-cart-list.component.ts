import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MatTable
} from '@angular/material';
import { IShoppingItem } from '../models/shopping-item';

export interface UserData {
  name: string;
  quantity: string;
  price: string;
}

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['name', 'quantity', 'price', 'remove'];
  dataSource: MatTableDataSource<IShoppingItem>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  @Input() items: IShoppingItem[];

  constructor() {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnChanges(changes: any) {
    this.dataSource.data = this.items;
  }

  removeRow = (row: IShoppingItem) => {
    this.dataSource.data = this.dataSource.data.filter(
      item => item.id !== row.id
    );
  };
}
