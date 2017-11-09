import { Component, Input } from '@angular/core';
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
  constructor(private saveProductService: SaveProductService) { }

  saveProduct(title: string, galleryURL: string, viewItemURL: string, price: number) {
    let newProduct: Product = new Product(title, galleryURL, viewItemURL, price);
      this.saveProductService.addProduct(newProduct);
      alert('Your item has been saved to the database.');
    }
}
