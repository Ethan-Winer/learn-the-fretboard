import { ChangeDetectorRef, Component, effect, inject } from '@angular/core';
import { AudioService } from '../../core/services/audio-service/audio-service';


@Component({
  selector: 'string-and-fret-prompt',
  imports: [],
  templateUrl: './string-and-fret-prompt.html',
  styleUrl: './string-and-fret-prompt.css',
})
export class StringAndFretPrompt {
  private audio = inject(AudioService);
  private cdr = inject(ChangeDetectorRef)
  public currentString: number = 0;
  public currentFret: number = 0;
  public targetNote: number = 0;


  constructor() {
    this.randomizeTargetNote()

    this.audio.currentNoteSubject.subscribe({
      next: (note) => {
        if (this.targetNote == note) {
          this.randomizeTargetNote()

          //  updates component variables because subscribe event
          //  doesn't do that automatically
          this.cdr.markForCheck()
        }
      }
    })
  }

  randomizeTargetNote() {
    let stringNumber = Math.floor(Math.random() * 6) + 1;
    let fretNumber = Math.floor(Math.random() * 13);
    let noteNumber = (6 - stringNumber) * 5 + fretNumber

    //  B string strikes again
    if (stringNumber <= 2) {
      noteNumber--
    }


    // return noteNumber
    this.currentString = stringNumber;
    this.currentFret = fretNumber;
    this.targetNote = noteNumber
  }

  onButtonClick() {
    this.audio.resume()
  }
}
