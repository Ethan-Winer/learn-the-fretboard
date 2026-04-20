import { TestBed } from '@angular/core/testing';

import { PitchDetector } from './pitch-detector';

describe('PitchDetector', () => {
  let service: PitchDetector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PitchDetector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
