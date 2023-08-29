import { TestBed } from '@angular/core/testing';

import { CustomerThingsService } from './customer-things.service';

describe('CustomerThingsService', () => {
  let service: CustomerThingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerThingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
