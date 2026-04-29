import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audioContext:AudioContext
  private pitchDetectorNode!:AudioWorkletNode;
  private sampleRate:number = 44100;

  public currentNoteSubject = new Subject<number>()

  constructor() {
    let options:AudioContextOptions = {
      latencyHint: "interactive",
      sampleRate: this.sampleRate,
    }
    this.audioContext = new AudioContext(options);
    
    this.suspend();
    this.setUpAudioContext()
  }

  async setUpAudioContext() {    
    //  adding mic input to start of audio context    
    let audioInputStream = await navigator.mediaDevices.getUserMedia({ audio: true })
    let audioInput = this.audioContext.createMediaStreamSource(audioInputStream);
    
    //  audio processor options
    let options:AudioWorkletNodeOptions = {
      processorOptions: {
        sampleRate: this.sampleRate
      }
    }

    //  creating audio worklet for pitch detection with options
    await this.audioContext.audioWorklet.addModule("assets/pitch-detection-processor.js");
    this.pitchDetectorNode = new AudioWorkletNode(this.audioContext, "pitch-detector-processor", options);
    
    //  on processor message recieved function
    this.pitchDetectorNode.port.onmessage = (event) => {

      let note = (12 * Math.log2(event.data / 440)) + 29;
      let cents = (note % 1) * 100
      
      if (cents > 80) {
        note = Math.ceil(note)
      }
      else if (cents < 20) {
        note = Math.floor(note)
      }
      else {
        return
      }

      this.currentNoteSubject.next(note)
    }
    
    //  sending audio input to pitch detector
    audioInput.connect(this.pitchDetectorNode)
  };
  
  async suspend() {
    this.audioContext.suspend();
  }
  
  async resume() {
    this.audioContext.resume();
  }
}
