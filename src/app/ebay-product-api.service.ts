import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model';
import { SaveProductService } from './save-product.service';

@Injectable()
export class EbayProductApiService {

  constructor(private http: Http, private saveProductService: SaveProductService) { }

  findItemsByKeywords(keyword: string) {
    return this.http.get("http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Margaret-dealfind-PRD-c134e8f72-bed5020c&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" + keyword + "&paginationInput.entriesPerPage=10")
  }

  saveImages(date: string, camera: string, keyword: string) {
  return this.http.get("http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Margaret-dealfind-PRD-c134e8f72-bed5020c&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" + keyword + "&paginationInput.entriesPerPage=10")
    .subscribe(response => {
      let foundProduct: Product;
      for(let product of response.json().findItemsByKeywordsResponse[0].searchResult[0].item) {
        foundProduct = new Product(product.title, product.galleryURL, product.viewItemURL[0], product.sellingStatus[0].currentPrice[0].__value__);
        this.saveProductService.addProduct(foundProduct);
      }
    });
  }
}
