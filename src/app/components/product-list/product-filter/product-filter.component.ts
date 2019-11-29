import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  displayFilters = false;

  constructor() { }

  ngOnInit() {
  }

  filterProducts(value: string) {
    // console.log(event.target.value);
    // this.test.filter((x: Product) => x.name.includes(state.name) && x.availability == state.availability);
  }

  openFilters() {
    console.log('clicked');
    this.displayFilters = !this.displayFilters;
  }

}
