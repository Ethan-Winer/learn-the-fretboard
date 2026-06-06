import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fretboard } from './fretboard';

describe('Fretboard', () => {
  let component: Fretboard;
  let fixture: ComponentFixture<Fretboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fretboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Fretboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
