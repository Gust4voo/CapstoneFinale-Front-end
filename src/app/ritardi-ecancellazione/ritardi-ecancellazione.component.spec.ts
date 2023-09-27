import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitardiECancellazioneComponent } from './ritardi-ecancellazione.component';

describe('RitardiECancellazioneComponent', () => {
  let component: RitardiECancellazioneComponent;
  let fixture: ComponentFixture<RitardiECancellazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RitardiECancellazioneComponent]
    });
    fixture = TestBed.createComponent(RitardiECancellazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
