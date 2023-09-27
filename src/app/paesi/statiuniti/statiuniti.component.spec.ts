import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatiunitiComponent } from './statiuniti.component';

describe('StatiunitiComponent', () => {
  let component: StatiunitiComponent;
  let fixture: ComponentFixture<StatiunitiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatiunitiComponent]
    });
    fixture = TestBed.createComponent(StatiunitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
