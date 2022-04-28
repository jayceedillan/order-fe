import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl: string = 'http://localhost:8082/';

  constructor(private http: HttpClient) {
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(
      `${this.apiUrl}category`
    );
  }

}
