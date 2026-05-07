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
  activeNotes = input<Record<number, number[]>>({})
  inactiveNotes = input<Record<number, number[]>>({})
  incorrectNotes = input<Record<number, number[]>>({})
  fretboardTable!:string[][];

  constructor() {
    this.makeFretBoardTable();
  }

  makeFretBoardTable() {
    this.fretboardTable = new Array<Array<string>>(6)
    for(let stringNumber = 0; stringNumber < this.fretboardTable.length; stringNumber++) {
      for (let fretNumber = 0; fretNumber < this.fretCount(); fretNumber++) {
        this.fretboardTable[stringNumber][fretNumber] = "default";
      }
    }

    this.addToFretboardTable(this.activeNotes(), "active");
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
}
