import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AmazonProductApiService {

  constructor(private http: Http) { }

  getByCategoryAndKeyword(category: string, keyword: string) {
    return this.http.get("http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJHSHRKJFJVMWS3WQ&AssociateTag=%20dealfinder0ff-20&Keywords=" + keyword + "&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2CItemIds%2COffers&SearchIndex=" + category + "&Service=AWSECommerceService&Timestamp=2017-11-08T21%3A12%3A51.000Z&Signature=nUBWz3QobG5BysQ4dfO%2B5T48GDBbHr32mjMcbKiOdQo%3D")
  }

}
