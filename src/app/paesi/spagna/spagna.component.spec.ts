import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpagnaComponent } from './spagna.component';

describe('SpagnaComponent', () => {
  let component: SpagnaComponent;
  let fixture: ComponentFixture<SpagnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpagnaComponent]
    });
    fixture = TestBed.createComponent(SpagnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
