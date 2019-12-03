import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product-list.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Input() productList: Product[];
  @Output() filteredList: EventEmitter<Product[]> = new EventEmitter();

  displayFilters = false;
  searchText = '';
  property = 'name';
  direction: 'asc' | 'desc' | 'none' = 'none';
  quantity = 0;
  minPrice = 0;
  maxPrice = 50000;
  available = '1';

  constructor() { }

  ngOnInit() {
  }

  applyFilter() {
    const availability = this.available === '1' || false;
    const filterList = this.productList.filter( product => {
      return product.name.includes(this.searchText) &&
        product.quantity >= this.quantity &&
        +product.price >= this.minPrice && +product.price <= this.maxPrice
        && product.availability === availability;
    });

    this.filteredList.emit(this.sortBy(filterList, this.property, this.direction));
  }

  filterSearchBox(event) {
    this.searchText = event.target.value;
  }

  filterQuantity(event) {
    const value = event.target.value || 0;
    this.quantity = value;
  }

  filterMin(event) {
    this.minPrice = event.target.value || 0;
  }

  filterMax(event) {
    this.maxPrice = event.target.value || 0;
  }

  filterAvailability(event) {
    this.available = event.target.value;
  }

  sortBy(array: any[], property: string, direction: 'asc' | 'desc' | 'none' ) {
    if ( direction === 'none') {
      return array;
    }

    return array.sort( (a , b) => {
      const aProperty = a[property];
      const bProperty = b[property];

      if (aProperty > bProperty) {
        return direction === 'desc' ? 1 : -1;
      }
      if (aProperty < bProperty) {
        return direction === 'desc' ? -1 : 1;
      }
      return 0;
    });
  }

  setSortDirection(direction) {
    this.direction = direction;

    this.applyFilter();
  }

  openFilters() {
    this.displayFilters = !this.displayFilters;
  }

  cancel() {
    this.resetFilters();
    this.displayFilters = !this.displayFilters;
  }

  resetFilters() {
    this.searchText = '';
    this.property = 'name';
    this.direction = 'none';
    this.quantity = 0;
    this.minPrice = 0;
    this.maxPrice = 50000;
    this.available = '1';

    this.filteredList.emit(this.productList);
  }

}
