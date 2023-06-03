import { TestBed } from '@angular/core/testing';

import { ApistreamService } from './apistream.service';

describe('ApistreamService', () => {
  let service: ApistreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApistreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
