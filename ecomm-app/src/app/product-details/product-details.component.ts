import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../entity/product';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less', '../css/core-style.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
    
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private location: Location
  ) {}

  ngOnInit() {
      this.getProducts();
  }
    
    getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
    }
 
  goBack(): void {
    this.location.back();
  }

}
