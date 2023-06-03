import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrbComponent } from './rrb.component';

describe('RrbComponent', () => {
  let component: RrbComponent;
  let fixture: ComponentFixture<RrbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RrbComponent]
    });
    fixture = TestBed.createComponent(RrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
