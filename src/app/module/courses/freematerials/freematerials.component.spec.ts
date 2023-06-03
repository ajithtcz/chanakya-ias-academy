import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreematerialsComponent } from './freematerials.component';

describe('FreematerialsComponent', () => {
  let component: FreematerialsComponent;
  let fixture: ComponentFixture<FreematerialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreematerialsComponent]
    });
    fixture = TestBed.createComponent(FreematerialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
