import { TestBed, inject } from '@angular/core/testing';

import { AmazonApiService } from './amazon-api.service';

describe('AmazonApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmazonApiService]
    });
  });

  it('should ...', inject([AmazonApiService], (service: AmazonApiService) => {
    expect(service).toBeTruthy();
  }));
});
