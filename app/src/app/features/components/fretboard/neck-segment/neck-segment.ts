import { Component, input } from '@angular/core';

@Component({
  selector: 'neck-segment',
  imports: [],
  templateUrl: './neck-segment.html',
  styleUrl: './neck-segment.css',
})
export class NeckSegment {
  fretNumber = input<number>();
  state = input<string>();
  width = input<number>(50);
}
