import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaldiveComponent } from './maldive.component';

describe('MaldiveComponent', () => {
  let component: MaldiveComponent;
  let fixture: ComponentFixture<MaldiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaldiveComponent]
    });
    fixture = TestBed.createComponent(MaldiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
