import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Options } from 'src/app/models/options';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() actionEvent: EventEmitter<Options> = new EventEmitter<Options>();
  
  @Input() numbers: number[] = [];

  @Input() orders: Order[] = [];

  @Input() options: Options = { orderBy: 'id',
  orderDir: 'ASC',
  page: 1,
  search: '',
  size: 5,};
  
  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.options.page++;
    this.actionEvent.emit(this.options);
  }

  prev() {
    this.options.page--;
    this.actionEvent.emit(this.options);
  }

  to(page: number) {
    this.options.page = page;
    this.actionEvent.emit(this.options);
  }
}
