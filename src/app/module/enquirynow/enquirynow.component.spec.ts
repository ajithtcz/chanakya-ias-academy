import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirynowComponent } from './enquirynow.component';

describe('EnquirynowComponent', () => {
  let component: EnquirynowComponent;
  let fixture: ComponentFixture<EnquirynowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquirynowComponent]
    });
    fixture = TestBed.createComponent(EnquirynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
