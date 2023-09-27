import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagaglioComponent } from './bagaglio.component';

describe('BagaglioComponent', () => {
  let component: BagaglioComponent;
  let fixture: ComponentFixture<BagaglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagaglioComponent]
    });
    fixture = TestBed.createComponent(BagaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
