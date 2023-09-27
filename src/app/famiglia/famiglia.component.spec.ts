import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamigliaComponent } from './famiglia.component';

describe('FamigliaComponent', () => {
  let component: FamigliaComponent;
  let fixture: ComponentFixture<FamigliaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamigliaComponent]
    });
    fixture = TestBed.createComponent(FamigliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
