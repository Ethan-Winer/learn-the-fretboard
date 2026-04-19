import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringAndFretPrompt } from './string-and-fret-prompt';

describe('StringAndFretPrompt', () => {
  let component: StringAndFretPrompt;
  let fixture: ComponentFixture<StringAndFretPrompt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringAndFretPrompt],
    }).compileComponents();

    fixture = TestBed.createComponent(StringAndFretPrompt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
