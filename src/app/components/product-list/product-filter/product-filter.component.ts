import { Component, OnInit, Input } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';
import { Product } from '../product-list.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  test: [];
  state = {name: '', availability: true};

  constructor() { }

  ngOnInit() {
  }

  filterProducts(value: string) {
    // console.log(event.target.value);
    // this.test.filter((x: Product) => x.name.includes(state.name) && x.availability == state.availability);
  }


}
