import { TestBed, inject } from '@angular/core/testing';

import { AmazonProductApiService } from './amazon-product-api.service';

describe('AmazonProductApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmazonProductApiService]
    });
  });

  it('should ...', inject([AmazonProductApiService], (service: AmazonProductApiService) => {
    expect(service).toBeTruthy();
  }));
});
