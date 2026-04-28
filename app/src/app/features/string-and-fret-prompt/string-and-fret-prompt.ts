import { Component, effect, inject } from '@angular/core';
import { AudioService } from '../../core/services/audio-service/audio-service';

@Component({
  selector: 'string-and-fret-prompt',
  imports: [],
  templateUrl: './string-and-fret-prompt.html',
  styleUrl: './string-and-fret-prompt.css',
})
export class StringAndFretPrompt {
  private audio = inject(AudioService);
  public currentString: number = 0;
  public currentFret: number = 0;
  public noteNumber: number = 0;

  constructor() {
    this.getRandomNote();
    effect(() => {
      this.audio.foundTargetNote()
      // this.getRandomNote()
      // this.audio.setTargetNote(this.noteNumber)
      console.log("found")
    })
  }

  getRandomNote(): void {
    let stringNumber = Math.floor(Math.random() * 6) + 1;
    let fretNumber = Math.floor(Math.random() * 13);
    let noteNumber = (6 - stringNumber) * 5 + fretNumber

    //  B string strikes again
    if (stringNumber <= 2) {
      noteNumber--
    }


    this.currentString = stringNumber;
    this.currentFret = fretNumber;
    this.noteNumber = noteNumber
  }

  onButtonClick(): void {
    this.getRandomNote();
    this.audio.setTargetNote(this.noteNumber)
    this.audio.resume()
  }

}
