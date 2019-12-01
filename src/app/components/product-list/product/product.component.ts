import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product, ProductListService } from '../product-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: string;
  product: Product;

  productForm = new FormGroup(
    {
      name: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(''),
      availability: new FormControl(''),
      id: new FormControl('')
    }
  );

  constructor(
    private productListService: ProductListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
     this.productId = this.route.snapshot.paramMap.get('id');

     this.productListService.getProduct(this.productId).subscribe(
      (res) => {
        this.productForm.patchValue(res);
        this.product = res;
      });
  }

  get productName() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
  get quantity() {
    return this.productForm.get('quantity');
  }

  saveChanges() {
    console.log('click');
    console.log(this.productForm.value);

    this.productListService.updateProduct(this.productId, this.productForm.value);
    this.router.navigate(['product-list']);
  }

  goBack() {
    this.router.navigate(['product-list']);
  }

}
