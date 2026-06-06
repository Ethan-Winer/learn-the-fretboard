import { Component, input } from '@angular/core';
import { NeckSegment } from './neck-segment/neck-segment';

@Component({
  selector: 'fretboard',
  imports: [NeckSegment],
  templateUrl: './fretboard.html',
  styleUrl: './fretboard.css',
})


export class Fretboard {
  fretCount = input<number>(24);
  tabView = input<boolean>(true);
  targetNotes = input<Record<number, number[]>>({})
  inactiveNotes = input<Record<number, number[]>>({})
  incorrectNotes = input<Record<number, number[]>>({})
  fretboardTable!:string[][];
  neckSegmentLengths = new Array<number>()

  constructor() {
    this.makeFretBoardTable();
    this.getNeckSegmentLengths(2000);
  }

  makeFretBoardTable() {
    this.fretboardTable = new Array<Array<string>>()
    for(let stringNumber = 0; stringNumber < 6; stringNumber++) {
      this.fretboardTable.push(new Array<string>())
      for (let fretNumber = 1; fretNumber <= this.fretCount(); fretNumber++) {
        this.fretboardTable[stringNumber].push("default");
      }
    }
    console.log(this.fretboardTable)

    this.addToFretboardTable(this.targetNotes(), "active");
    this.addToFretboardTable(this.inactiveNotes(), "inactive");

    this.addToFretboardTable(this.incorrectNotes(), "incorrect");
  }

  addToFretboardTable(noteSelection:Record<number, number[]>, selector:string) {
      Object.entries(noteSelection).forEach(([key, fretNumbers]) => {
      let stringNumber = parseInt(key);
      noteSelection[stringNumber].forEach(fretNumber => {
        this.fretboardTable[stringNumber][fretNumber] = selector;
      })
    })
  }

  getNeckSegmentLengths(neckLength:number) {
    let remainingNeckSpace = neckLength;
    for(let i = 0; i < this.fretCount(); i++) {
      let segmentLength = remainingNeckSpace / 17.817
      this.neckSegmentLengths.push(segmentLength);
      remainingNeckSpace -= segmentLength;
    }
  }

  onClick(sringNumber:number, fretNumber:number) {
    console.log((sringNumber + 1) + ", " + (fretNumber + 1))
  }

}
