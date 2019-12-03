import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  // url = 'https://demo0928420.mockable.io/products/list';
  private url = 'api/products';
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

    updateProduct(product): Observable<Product> {
      return this.http.put<Product>(`${this.url}`, product);
    }

    createProduct(product): Observable<Product> {
      return this.http.post<Product>(`${this.url}`, product);
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
