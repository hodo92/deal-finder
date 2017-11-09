import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AmazonProductApiService {

  constructor(private http: Http) { }

  getSignatureKey(Crypto, key, dateStamp, regionName, serviceName) {
    var kDate = Crypto.HmacSHA256(dateStamp, "AWS4" + key);
    var kRegion = Crypto.HmacSHA256(regionName, kDate);
    var kService = Crypto.HmacSHA256(serviceName, kRegion);
    var kSigning = Crypto.HmacSHA256("aws4_request", kService);
    return kSigning;
  }

  getByCategoryAndKeyword(keyword: string) {
     return this.http.get("http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJHSHRKJFJVMWS3WQ&AssociateTag=%20dealfinder0ff-20&Keywords="+keyword+"&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=All&Service=AWSECommerceService&Timestamp=2017-11-09T00%3A11%3A30.000Z&Signature=aMYycD2j8%2FpeWCRiz%2FRdgvZnVHgSFId4bGHTh5BhFCM%3D")
  }


}
