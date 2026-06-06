import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FretboardGraph } from './fretboard-graph';

describe('FretboardGraph', () => {
  let component: FretboardGraph;
  let fixture: ComponentFixture<FretboardGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FretboardGraph],
    }).compileComponents();

    fixture = TestBed.createComponent(FretboardGraph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
