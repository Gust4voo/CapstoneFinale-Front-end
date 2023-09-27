import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItaliaComponent } from './italia.component';

describe('ItaliaComponent', () => {
  let component: ItaliaComponent;
  let fixture: ComponentFixture<ItaliaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItaliaComponent]
    });
    fixture = TestBed.createComponent(ItaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
