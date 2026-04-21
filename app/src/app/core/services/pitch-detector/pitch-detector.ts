import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PitchDetector {
  private audioContext:AudioContext
  private pitchDetectorNode!:AudioWorkletNode;
  private sampleRate:number = 44100;

  async setUpAudioContext() {    
    //  adding mic input to start of audio context    
    let audioInputStream = await navigator.mediaDevices.getUserMedia({ audio: true })
    let audioInput = this.audioContext.createMediaStreamSource(audioInputStream);
    
    //  audio processor options
    let options:AudioWorkletNodeOptions = {
      processorOptions: {sampleRate: this.sampleRate}
    }
    //  creating audio worklet for pitch detection with options
    await this.audioContext.audioWorklet.addModule("assets/pitch-detector-worklet.js");
    this.pitchDetectorNode = new AudioWorkletNode(this.audioContext, "pitch-detector-worklet", options);

    //  sending audio input to pitch detector
    audioInput.connect(this.pitchDetectorNode)
  };

  async suspend() {
    this.audioContext.suspend();
  }

  async resume() {
    this.audioContext.resume();
  }
    
  constructor() {
    let options:AudioContextOptions = {
      latencyHint: "interactive",
      sampleRate: this.sampleRate
    }
    this.audioContext = new AudioContext(options);

    this.suspend();
    this.setUpAudioContext()
  }
}
