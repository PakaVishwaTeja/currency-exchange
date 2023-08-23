import { TestBed } from '@angular/core/testing';

import { AdminThingsService } from './admin-things.service';

describe('AdminThingsService', () => {
  let service: AdminThingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminThingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
