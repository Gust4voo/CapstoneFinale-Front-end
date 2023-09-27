import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreciaComponent } from './grecia.component';

describe('GreciaComponent', () => {
  let component: GreciaComponent;
  let fixture: ComponentFixture<GreciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreciaComponent]
    });
    fixture = TestBed.createComponent(GreciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
