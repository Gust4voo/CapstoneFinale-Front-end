import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunisiaComponent } from './tunisia.component';

describe('TunisiaComponent', () => {
  let component: TunisiaComponent;
  let fixture: ComponentFixture<TunisiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TunisiaComponent]
    });
    fixture = TestBed.createComponent(TunisiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
