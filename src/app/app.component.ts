import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from './models/category';
import { Options } from './models/options';
import { Order } from './models/order';
import { CategoryService } from './service/category.service';
import { OrderService } from './service/order.service';
import { getCategory } from './store/category.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'order';

  options: Options = {
    orderBy: 'id',
    orderDir: 'ASC',
    page: 1,
    search: '',
    size: 5,
  };

  orders: Order[] = [];
  category: Category[] = [];

  constructor(private orderService: OrderService, 
     private categoryService: CategoryService,
     private store: Store<{ category: Category[] }>) {}

  showModal: boolean = false;

  get direction() {
    return this.options.orderDir === 'ASC' ? '⬆' : '⬇';
  }

  ngOnInit(): void {
    this.getOrders();
    this.getCategory();
  }


  getOrders(): void {
    this.orderService.getOrders(this.options).subscribe((data) => {
      this.orders = data.orders;
    });    
  }

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
      this.store.dispatch(getCategory({ category: this.category }));
    });
  }

  order(by: string) {
    if (this.options.orderBy === by) {
      this.options.orderDir = this.options.orderDir === 'ASC' ? 'DESC' : 'ASC';
    } else {
      this.options.orderBy = by;
    }
    this.getOrders();
  }

  size(size: number) {
    this.options.size = size;
    this.options.page = 1;
    debugger
    this.getOrders();
  }

  by(order: string) {
    return this.options.orderBy === order;
  }

  openModal(isOk: boolean) {
    this.showModal = isOk;
  }

  isProceed(isSave: boolean) {
    this.showModal = false;
    if (isSave) {
      this.getOrders();
    }
  }
}
// ng serve --port 8081