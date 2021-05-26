function array () {
    freqList = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000]
}
function updateWave () {
    pins.analogWritePin(AnalogPin.P0, 10.24 * pulseWidth)
    freqIndex = Math.constrain(freqIndex, 0, 11)
    basic.showNumber(freqIndex)
    pins.analogSetPeriod(AnalogPin.P0, 1000000 / freqList[freqIndex])
}
input.onButtonPressed(Button.A, function () {
    freqIndex = freqIndex - 1
    updateWave()
})
input.onButtonPressed(Button.B, function () {
    freqIndex = freqIndex + 1
    updateWave()
})
let freqList: number[] = []
let freqIndex = 0
let pulseWidth = 0
pulseWidth = 50
freqIndex = 6
array()
updateWave()
