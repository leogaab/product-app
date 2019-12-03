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
      id: new FormControl(this.idGenerator(15))
    }
  );

  constructor(
    private productListService: ProductListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {}

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
    // console.log(this.productForm.value);

    this.productListService.createProduct(this.productForm.value)
    .subscribe( res => this.router.navigate(['product-list']) );
  }

  goBack() {
    this.router.navigate(['product-list']);
  }

  private idGenerator(length) {
    let result = '';
    const characters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyzZ0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
