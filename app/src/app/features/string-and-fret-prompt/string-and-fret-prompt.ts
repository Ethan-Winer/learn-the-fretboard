import { Component, inject } from '@angular/core';
import { PitchDetector } from '../../core/services/pitch-detector/pitch-detector';

@Component({
  selector: 'string-and-fret-prompt',
  imports: [],
  templateUrl: './string-and-fret-prompt.html',
  styleUrl: './string-and-fret-prompt.css',
})
export class StringAndFretPrompt {
  private pitchDetector = inject(PitchDetector);


  private strings:number[] = [82.41, 110, 146.83, 196, 246.94, 329.63];


  public currentString:number = 0;
  public currentFret:number = 0;
  public frequency:number = 0;
  
  constructor() {
    this.getRandomNote();
  }

  getRandomNote():void {
    let stringNumber = Math.floor(Math.random() * 6);
    let fretNumber = Math.floor(Math.random() * 25);
    let stringFrequency = this.strings[stringNumber];
    
    let noteFrequency:number;
    if (fretNumber > 0) {
      let fretMultiplier = Math.pow(2, 1/12);
      noteFrequency = stringFrequency * Math.pow(fretMultiplier, fretNumber - 1);
    }
    else {
      noteFrequency = stringFrequency;
    }
    
    this.currentString = stringNumber + 1;
    this.currentFret = fretNumber;
    this.frequency = noteFrequency;
  }

  onButtonClick():void {
    this.getRandomNote();
    this.pitchDetector.resume()
  }


    
}
