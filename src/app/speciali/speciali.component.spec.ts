import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialiComponent } from './speciali.component';

describe('SpecialiComponent', () => {
  let component: SpecialiComponent;
  let fixture: ComponentFixture<SpecialiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialiComponent]
    });
    fixture = TestBed.createComponent(SpecialiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
