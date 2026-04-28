import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audioContext:AudioContext
  private pitchDetectorNode!:AudioWorkletNode;
  private sampleRate:number = 44100;
  private targetNote!:number;
  
  public foundTargetNote = signal<boolean>(true)

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

      let note = (12 * Math.log2(event.data / 440));
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

      note += 29
      if (note == this.targetNote) {
        this.foundTargetNote.update((value) => !value)
      }
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

  setTargetNote(targetNote:number) {
    this.targetNote = targetNote
  }
}
