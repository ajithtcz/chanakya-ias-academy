import { TestBed } from '@angular/core/testing';

import { DashboardApicoursesService } from './dashboard-apicourses.service';

describe('DashboardApicoursesService', () => {
  let service: DashboardApicoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardApicoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
