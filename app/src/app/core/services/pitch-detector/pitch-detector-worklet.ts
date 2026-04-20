class PitchDetectorWorklet extends AudioWorkletProcessor {
    private buffer:Float32Array = new Float32Array(2048)
    process(inputs:Float32Array[][], outputs:Float32Array[][], parameters:Record<string, Float32Array>):boolean {
        console.log(inputs.length)
        return true;
    }

}
registerProcessor("pitch-detector-worklet", PitchDetectorWorklet)