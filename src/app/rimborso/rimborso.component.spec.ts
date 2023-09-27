import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimborsoComponent } from './rimborso.component';

describe('RimborsoComponent', () => {
  let component: RimborsoComponent;
  let fixture: ComponentFixture<RimborsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RimborsoComponent]
    });
    fixture = TestBed.createComponent(RimborsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
