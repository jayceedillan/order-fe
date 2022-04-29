import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Options } from '../models/options';
import { Order } from '../models/order';
import { ResponseData } from '../models/response';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl: string = 'http://localhost:8082/order';
  constructor(private http: HttpClient) {
  }

  getOrders(options: Options): Observable<ResponseData> {
    
    const pagination = {
      pageNumber: options.page,
      order: options.orderDir,
      sortBy: options.orderBy,
      offset: options.size,
    };
     
    return this.http.get(this.apiUrl, {params: pagination}).pipe(map(response => <ResponseData>response ));
  }

  addOrder(order: Order): Observable<Order> {
  
    order.dateCreated = new Date();
    return this.http.post<Order>(
      `${this.apiUrl}`,
      order
    );
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete<Order>(
      `${this.apiUrl}/${id}`
    );
  }
}
