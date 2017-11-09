import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { SaveProductService } from '../save-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ SaveProductService ]
})
export class ProductListComponent {
  @Input() childProducts;
  @Output() clickSender = new EventEmitter();
  filterByPrice: string = "inexpensiveProducts";
  constructor(private saveProductService: SaveProductService) { }

  saveProduct(title: string, galleryURL: string, viewItemURL: string, price: number) {
    let newProduct: Product = new Product(title, galleryURL, viewItemURL, price);
      this.saveProductService.addProduct(newProduct);
      alert('Your item has been saved to the database.');
    }

  onChange(optionFromMenu) {
    this.filterByPrice = optionFromMenu;
  }

  //  isExpensive(price) {
  //    if (price < 10) {
  //     price.price =  true;
  //    }
  //   }
   }
