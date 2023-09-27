import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattiComponent } from './contatti.component';

describe('ContattiComponent', () => {
  let component: ContattiComponent;
  let fixture: ComponentFixture<ContattiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContattiComponent]
    });
    fixture = TestBed.createComponent(ContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
