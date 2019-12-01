import { Component, OnInit } from '@angular/core';
import { ProductListService, Product } from './product-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productListService: ProductListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productListService.getProductList().subscribe(
      res => {
        this.products = res;
    });
  }

  editProduct(id: string) {
    this.router.navigate([`edit/${id}`] );
  }
}
