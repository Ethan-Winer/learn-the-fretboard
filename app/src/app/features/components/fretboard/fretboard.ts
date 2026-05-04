import { Component } from '@angular/core';
import { NeckSegment } from './neck-segment/neck-segment';

@Component({
  selector: 'fretboard',
  imports: [NeckSegment],
  templateUrl: './fretboard.html',
  styleUrl: './fretboard.css',
})
export class Fretboard {
  public neckSegments:Array<NeckSegment> = []

  constructor() {
    this.neckSegments.push(new NeckSegment())
    this.neckSegments.push(new NeckSegment())
  }
}
