import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgtrbComponent } from './pgtrb.component';

describe('PgtrbComponent', () => {
  let component: PgtrbComponent;
  let fixture: ComponentFixture<PgtrbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgtrbComponent]
    });
    fixture = TestBed.createComponent(PgtrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
