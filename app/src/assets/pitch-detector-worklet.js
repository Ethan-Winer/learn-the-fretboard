export class PitchDetectorWorklet extends AudioWorkletProcessor {
    buffer = new Float32Array(1024)
    sampleRate
    bufferIndex = 0

    constructor(...args) {
        super(...args)
        this.sampleRate = args[0].processorOptions.sampleRate   
    }

    process(inputs, outputs, parameters) {
        for (let i = 0; i < inputs[0][0].length; i++) {
            this.buffer[this.bufferIndex] = inputs[0][0][i]
            this.bufferIndex++
        }

        if (this.bufferIndex > 2047) {
            console.log(this.buffer)
            this.bufferIndex = 0
        }


        return true;
    }

}
registerProcessor("pitch-detector-worklet", PitchDetectorWorklet)