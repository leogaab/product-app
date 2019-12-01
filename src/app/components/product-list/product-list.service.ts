import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  // url = 'https://demo0928420.mockable.io/products/list';
  url = 'api/products';
  items = [];

  constructor(
    private http: HttpClient
    ) { }

    getProductList(): Observable<Product[]> {
      return this.http.get<Product[]>(this.url);
    }

    getProduct(id: string): Observable<Product> {
      return this.http.get<Product>(`${this.url}/${id}`);
    }

    
    
    
    updateProduct(id: string, product): Observable<Product> {
      return this.http.put<Product>(`${this.url}/${id}`, product);
    }
}

export interface Product {
  quantity: number;
  price: string;
  availability: boolean;
  name: string;
  id: string;
}

export interface ProductObject {
  products: Product[];
}
