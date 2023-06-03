import { TestBed } from '@angular/core/testing';

import { ApistudentprofileService } from './apistudentprofile.service';

describe('ApistudentprofileService', () => {
  let service: ApistudentprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApistudentprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
