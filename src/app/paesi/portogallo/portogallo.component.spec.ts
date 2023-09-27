import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortogalloComponent } from './portogallo.component';

describe('PortogalloComponent', () => {
  let component: PortogalloComponent;
  let fixture: ComponentFixture<PortogalloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortogalloComponent]
    });
    fixture = TestBed.createComponent(PortogalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
