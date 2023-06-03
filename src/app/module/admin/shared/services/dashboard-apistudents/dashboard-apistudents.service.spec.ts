import { TestBed } from '@angular/core/testing';

import { DashboardApistudentsService } from './dashboard-apistudents.service';

describe('DashboardApistudentsService', () => {
  let service: DashboardApistudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardApistudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
