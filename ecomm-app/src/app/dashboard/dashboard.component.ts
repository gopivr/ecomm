import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/product';
import { ProductServiceService } from '../product-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.less', '../css/core-style.css' ]
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products.slice(0, 5));
  }
}