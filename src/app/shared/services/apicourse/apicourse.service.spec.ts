import { TestBed } from '@angular/core/testing';

import { ApicourseService } from './apicourse.service';

describe('ApicourseService', () => {
  let service: ApicourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
