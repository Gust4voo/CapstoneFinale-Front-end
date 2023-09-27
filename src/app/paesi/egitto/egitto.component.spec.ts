import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgittoComponent } from './egitto.component';

describe('EgittoComponent', () => {
  let component: EgittoComponent;
  let fixture: ComponentFixture<EgittoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgittoComponent]
    });
    fixture = TestBed.createComponent(EgittoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
