import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteNumberToLetter',
})
export class NoteNumberToLetterPipe implements PipeTransform {
  notes = ["E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb"]
  transform(value: number, ...args: unknown[]): unknown {
    let noteLetter = String(this.notes[value % 12])
    // let octaveNumber = String(Math.floor(value / 12) + 2)
    // return `${noteLetter}${octaveNumber}`;
    return noteLetter
  }
}
