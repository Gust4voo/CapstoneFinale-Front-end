import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaroccoComponent } from './marocco.component';

describe('MaroccoComponent', () => {
  let component: MaroccoComponent;
  let fixture: ComponentFixture<MaroccoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaroccoComponent]
    });
    fixture = TestBed.createComponent(MaroccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
