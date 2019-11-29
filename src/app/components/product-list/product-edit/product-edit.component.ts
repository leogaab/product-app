import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ProductListService, Product } from '../product-list.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  products: Product[] = [];

  constructor(
    // private http: HttpClient,
    private productListService: ProductListService
  ) { }

  ngOnInit() {
    this.productListService.getProductList().subscribe(
      res => {
        this.products = res;
    });
  }

}
