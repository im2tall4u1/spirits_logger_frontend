import { TestBed } from '@angular/core/testing';

import { SpiritServiceService } from './spirit-service.service';

describe('SpiritServiceService', () => {
  let service: SpiritServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpiritServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
