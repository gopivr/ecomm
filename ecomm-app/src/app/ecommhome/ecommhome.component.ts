import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/product';
import { ProductServiceService } from '../product-service';
import { MessagesService } from '../messages.service';
@Component({
    selector: 'app-ecommhome',
    templateUrl: './ecommhome.component.html',
    styleUrls: ['./ecommhome.component.less', '../css/core-style.css']
})
export class EcommhomeComponent implements OnInit {

    dashboardSelected = true;
    catogorySelected = false;
    productSelected = false;
    cartSelected = false;
    checkoutSelected = false;

    products: Product[];
    selectProduct: Product;
    constructor(private productServiceService: ProductServiceService) { }

    ngOnInit() {
        this.getProducts();
    }

    getProducts(): void {
        this.productServiceService.getProducts()
            .subscribe(products => this.products = products);
    }

    onSelect(product: Product): void {
        this.selectProduct = product;
    }

    onMenuClick(item: string): void {
        this.dashboardSelected = false;
        this.catogorySelected = false;
        this.productSelected = false;
        this.cartSelected = false;
        this.checkoutSelected = false;
        if (item == 'home') {
            this.dashboardSelected = true;
        } else if (item == 'cat') {
            this.catogorySelected = true;
        } else if (item == 'prod') {
            this.productSelected = true;
        } else if (item == 'cart') {
            this.cartSelected = true;
        } else if (item == 'checkout') {
            this.checkoutSelected = true;
        }
    }

    onProductSelected(productid: string) {
        console.info("input" + productid);
        this.onMenuClick('prod');
    }
}
