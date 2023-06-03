import { TestBed } from '@angular/core/testing';

import { ApienquiryService } from './apienquiry.service';

describe('ApienquiryService', () => {
  let service: ApienquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApienquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
