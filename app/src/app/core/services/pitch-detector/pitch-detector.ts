import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PitchDetector {
  private audioContext:AudioContext
  private noteDetectorNode:AudioWorkletNode
  private currentNote:String


  async initAudio()
  constructor() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.audioContext.createMediaStreamSource(stream);
    });
    

    
    
  }

}
