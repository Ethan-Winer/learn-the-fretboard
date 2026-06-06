import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckSegment } from './neck-segment';

describe('NeckSegment', () => {
  let component: NeckSegment;
  let fixture: ComponentFixture<NeckSegment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeckSegment],
    }).compileComponents();

    fixture = TestBed.createComponent(NeckSegment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
