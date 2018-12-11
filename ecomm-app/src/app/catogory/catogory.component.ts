import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-catogory',
  templateUrl: './catogory.component.html',
  styleUrls: ['./catogory.component.less', '../css/core-style.css']
})
    
export class CatogoryComponent implements OnInit {

  @Input()  name: string;
  @Output() productSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  selectedProduct(productId : string): void { 
      console.info('inside product seledected');
      this.productSelected.emit(productId);
  }
}

