import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiordaniaComponent } from './giordania.component';

describe('GiordaniaComponent', () => {
  let component: GiordaniaComponent;
  let fixture: ComponentFixture<GiordaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiordaniaComponent]
    });
    fixture = TestBed.createComponent(GiordaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
