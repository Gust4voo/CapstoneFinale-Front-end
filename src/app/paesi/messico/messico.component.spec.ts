import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessicoComponent } from './messico.component';

describe('MessicoComponent', () => {
  let component: MessicoComponent;
  let fixture: ComponentFixture<MessicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessicoComponent]
    });
    fixture = TestBed.createComponent(MessicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
