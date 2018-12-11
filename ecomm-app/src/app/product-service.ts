import { Injectable } from '@angular/core';
import { Product } from './entity/product';
import { PRODUCTS } from './mock/products-mock';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

   getProducts() : Observable<Product[]> {
    this.messagesService.add("Fetching data");
    return of(PRODUCTS); 
   }

    getProduct(id: number): Observable<Product> {
    // TODO: send the message _after_ fetching the hero
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(PRODUCTS.find(hero => hero.id === id));
  }
  constructor(public messagesService: MessagesService) { }
}
