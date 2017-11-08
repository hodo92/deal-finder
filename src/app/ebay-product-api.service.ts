import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EbayProductApiService {

  constructor(private http: Http) { }

  findItemsByKeywords(keyword: string) {
    return this.http.get("http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=Margaret-dealfind-PRD-c134e8f72-bed5020c&GLOBAL-ID=EBAY-US&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" + keyword + "&paginationInput.entriesPerPage=3")
  }
}
