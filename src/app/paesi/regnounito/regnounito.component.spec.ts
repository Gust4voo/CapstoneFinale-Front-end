import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnounitoComponent } from './regnounito.component';

describe('RegnounitoComponent', () => {
  let component: RegnounitoComponent;
  let fixture: ComponentFixture<RegnounitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegnounitoComponent]
    });
    fixture = TestBed.createComponent(RegnounitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
