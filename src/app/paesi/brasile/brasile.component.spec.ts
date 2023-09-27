import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasileComponent } from './brasile.component';

describe('BrasileComponent', () => {
  let component: BrasileComponent;
  let fixture: ComponentFixture<BrasileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrasileComponent]
    });
    fixture = TestBed.createComponent(BrasileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
