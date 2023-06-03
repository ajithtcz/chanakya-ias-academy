import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpscComponent } from './upsc.component';

describe('UpscComponent', () => {
  let component: UpscComponent;
  let fixture: ComponentFixture<UpscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpscComponent]
    });
    fixture = TestBed.createComponent(UpscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
