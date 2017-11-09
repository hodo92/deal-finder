import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EbayProductApiService } from '../ebay-product-api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [ EbayProductApiService ]
})
export class ProductFormComponent implements OnInit {
  products: any[]=null;

  constructor(private ebayProducts: EbayProductApiService) { }
  
  getProducts(keyword: string) {
    this.ebayProducts.findItemsByKeywords(keyword).subscribe(response => {
      this.products = response.json();
      console.log(this.products);
    });
  }
  ngOnInit() {
  }

}
