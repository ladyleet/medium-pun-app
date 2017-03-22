import { TestBed, inject } from '@angular/core/testing';

import { PunService } from './pun.service';

describe('PunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PunService]
    });
  });

  it('should ...', inject([PunService], (service: PunService) => {
    expect(service).toBeTruthy();
  }));
});
