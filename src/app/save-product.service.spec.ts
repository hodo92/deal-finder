import { TestBed, inject } from '@angular/core/testing';

import { SaveProductService } from './save-product.service';

describe('SaveProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveProductService]
    });
  });

  it('should ...', inject([SaveProductService], (service: SaveProductService) => {
    expect(service).toBeTruthy();
  }));
});
