import { Component, input } from '@angular/core';

@Component({
  selector: 'fretboard-graph',
  imports: [],
  templateUrl: './fretboard-graph.html',
  styleUrl: './fretboard-graph.css',
})
export class FretboardGraph {
  noteStates = [ "active", "inactive", "targeted", "incorrect"]
  fretCount = input<number>(24);
  fretRange:number[];
  noteData:Record<string, string[]> = {};

  constructor() {
    for(let i = 1; i <= 6; i++) {
      this.noteData[i.toString()] = new Array()
      for(let k = 0; k < this.fretCount() + 1; k++) {
        this.noteData[i.toString()].push("active");
      }
    }

    this.fretRange= new Array()
    for(let i = 0; i <= this.fretCount(); i++) {
      this.fretRange.push(i);
    } 
  }


  getNoteDataKeys() {
    return Object.keys(this.noteData);
  }



  print(output:string) {
    console.log(output);
  }
}
