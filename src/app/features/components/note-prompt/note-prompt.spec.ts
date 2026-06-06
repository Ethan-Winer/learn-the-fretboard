import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePrompt } from './note-prompt';

describe('NotePrompt', () => {
  let component: NotePrompt;
  let fixture: ComponentFixture<NotePrompt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotePrompt],
    }).compileComponents();

    fixture = TestBed.createComponent(NotePrompt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
