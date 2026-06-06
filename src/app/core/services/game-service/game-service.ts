import { inject, Injectable, signal } from '@angular/core';
import { AudioService } from '../audio-service/audio-service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private audioService = inject(AudioService)
  public targetNote = signal<number>(-1)
  public targetString = signal<number>(-1)
  public targetFret = signal<number>(-1)

  constructor() {
    this.randomizeNote()
    this.audioService.newNoteDetected.subscribe({
      next: (note:number) => {
        this.onNewNote(note)
      }
    })
  }

  private onNewNote(note:number) {
    if (note == this.targetNote()) {
      this.randomizeNote()
    }
  }

  public randomizeNote() {
    let stringNumber = Math.floor(Math.random() * 6) + 1;
    let fretNumber = Math.floor(Math.random() * 24);
    let noteNumber = (6 - stringNumber) * 5 + fretNumber

    //  B string strikes again
    if (stringNumber <= 2) {
      noteNumber--
    }

    this.targetString.set(stringNumber);
    this.targetFret.set(fretNumber);
    this.targetNote.set(noteNumber);
    console.log("target string: " + this.targetString)
    console.log("target fret: " + this.targetFret )
  }

  public startGame() {
    this.audioService.resumeAudioInput();
  }

  public stopGame() {
    this.audioService.suspendAudioInput();
  }
}
