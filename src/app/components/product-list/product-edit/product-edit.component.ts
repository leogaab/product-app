import { Component, OnInit } from '@angular/core';
import { ProductListService, Product } from '../product-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
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

     this.productForm.controls.id.setValue(this.productId);

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
    this.productListService.updateProduct(this.productForm.value)
    .subscribe( res => this.router.navigate(['product-list']) );
  }

  goBack() {
    this.router.navigate(['product-list']);
  }

}
