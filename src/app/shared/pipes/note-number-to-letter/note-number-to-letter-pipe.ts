import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noteNumberToLetter',
})
export class NoteNumberToLetterPipe implements PipeTransform {
  // notes = ["E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb"]
  notes = ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"]

  transform(value: number, ...args: unknown[]): unknown {
    let noteLetter = String(this.notes[value % 12])
    return noteLetter
  }
}
