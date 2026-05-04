import { Component } from '@angular/core';

@Component({
  selector: 'neck-segment',
  imports: [],
  templateUrl: './neck-segment.html',
  styleUrl: './neck-segment.css',
})
export class NeckSegment {
  note!:number;
  fret!:number

  // constructor(note:number) {
  //   this.note = note;
  // }
}
