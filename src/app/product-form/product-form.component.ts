import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EbayProductApiService } from '../ebay-product-api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [ EbayProductApiService ]
})
export class ProductFormComponent {
  products: any[] = null;
  constructor(private ebayProducts: EbayProductApiService) { }
  getProducts(keyword: string) {
    this.ebayProducts.findItemsByKeywords(keyword).subscribe(response => {
      this.products = response.json();
    });
  }
}
