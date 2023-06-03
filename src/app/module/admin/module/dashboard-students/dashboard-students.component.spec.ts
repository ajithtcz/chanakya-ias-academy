import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStudentsComponent } from './dashboard-students.component';

describe('DashboardStudentsComponent', () => {
  let component: DashboardStudentsComponent;
  let fixture: ComponentFixture<DashboardStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStudentsComponent]
    });
    fixture = TestBed.createComponent(DashboardStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
