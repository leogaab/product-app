import { Component, OnInit } from '@angular/core';
import { ProductListService, Product } from './product-list.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productListService: ProductListService
  ) { }

  ngOnInit() {
    this.productListService.getProductList().subscribe(
      res => {
        this.products = res;
    });
  }

  editProduct() {
    console.log('Product clicked!');
  }
}
