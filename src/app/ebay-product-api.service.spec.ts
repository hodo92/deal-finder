import { TestBed, inject } from '@angular/core/testing';

import { EbayProductApiService } from './ebay-product-api.service';

describe('EbayProductApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EbayProductApiService]
    });
  });

  it('should ...', inject([EbayProductApiService], (service: EbayProductApiService) => {
    expect(service).toBeTruthy();
  }));
});
