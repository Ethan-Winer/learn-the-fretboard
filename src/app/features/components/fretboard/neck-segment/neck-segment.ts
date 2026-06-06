import { Component, input } from '@angular/core';

@Component({
  selector: 'neck-segment',
  imports: [],
  templateUrl: './neck-segment.html',
  styleUrl: './neck-segment.css',
})

export class NeckSegment {
  // fretNumber = input.required<number>();
  fretNumber = 1;
  fretWidthPx = 5;
  stringStates=input.required<string[]>();
  toScale = input<boolean>(true);
  containerWidth:number;


  stringHeights:Record<number,number> = {
    0: 12,
    1: 15,
    2: 17,
    3: 16,
    4: 18,
    5: 19
  }

  constructor() {
    this.containerWidth = this.getContainerWidthPx();
  }
  
  getContainerWidthPx():number {
    if (this.toScale()) {
      let width = 2000;   //  update this to fretboard length
      for(let i = 0; i < this.fretNumber - 1; i++) {
        width -= width / 17.817
      }

      return width / 17.817;
    }
    else {
      return 50;
    }
  }
}

