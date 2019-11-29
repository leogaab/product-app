import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  url = 'https://demo0928420.mockable.io/products/list';
  items = [];

  constructor(
    private http: HttpClient
    ) { }

    getProductList() {
      return this.http.get(this.url).pipe(
        map( (list: ProductObject) =>  list.products)
      );
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
