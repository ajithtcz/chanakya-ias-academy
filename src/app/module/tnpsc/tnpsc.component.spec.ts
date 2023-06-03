import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnpscComponent } from './tnpsc.component';

describe('TnpscComponent', () => {
  let component: TnpscComponent;
  let fixture: ComponentFixture<TnpscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnpscComponent]
    });
    fixture = TestBed.createComponent(TnpscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
