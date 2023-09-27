import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubaComponent } from './cuba.component';

describe('CubaComponent', () => {
  let component: CubaComponent;
  let fixture: ComponentFixture<CubaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CubaComponent]
    });
    fixture = TestBed.createComponent(CubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
