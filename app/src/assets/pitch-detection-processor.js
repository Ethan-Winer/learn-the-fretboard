import { PitchDetector } from "https://esm.sh/pitchy@4";

export class PitchDetectorProcessor extends AudioWorkletProcessor {
    bufferSize = 1024;
    pitchDetector;
    buffer;
    sampleRate;
    bufferIndex;

    constructor(...args) {
        super(...args)
        this.pitchDetector = PitchDetector.forFloat32Array(this.bufferSize)
        this.buffer = new Float32Array(this.bufferSize)
        this.sampleRate = args[0].processorOptions.sampleRate
        this.bufferIndex = 0
    }

    process(inputs, outputs, parameters) {
        for (let i = 0; i < inputs[0][0].length; i++) {
            this.buffer[this.bufferIndex] = inputs[0][0][i]
            this.bufferIndex++
        }

        if (this.bufferIndex > this.bufferSize) {
            let pitch = this.pitchDetector.findPitch(this.buffer, this.sampleRate)
            
            if (pitch[1] > 0.999) {
                this.port.postMessage(pitch[0])
            }
            this.bufferIndex = 0
        }


        return true;
    }

}
registerProcessor("pitch-detector-processor", PitchDetectorProcessor)