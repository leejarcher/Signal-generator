function array () {
    freqList = [2, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000]
}
input.onButtonPressed(Button.A, function () {
    if (pwFreq) {
        freqIndex = freqIndex - 1
        updateFrequency()
    } else {
        pulseWidth = pulseWidth - 5
        updatePW()
    }
})
input.onButtonPressed(Button.AB, function () {
    pwFreq = !(pwFreq)
    if (pwFreq) {
        updateFrequency()
    } else {
        updatePW()
    }
})
input.onButtonPressed(Button.B, function () {
    if (pwFreq) {
        freqIndex = freqIndex + 1
        updateFrequency()
    } else {
        pulseWidth = pulseWidth + 5
        updatePW()
    }
})
function updateFrequency () {
    freqIndex = Math.constrain(freqIndex, 1, freqList.length)
    freq = freqList[freqIndex - 1]
    pins.analogSetPeriod(AnalogPin.P0, 1000000 / freq)
    if (freq > 999) {
        freq = freq / 1000
        units = "kHz"
    } else {
        units = "Hz"
    }
    basic.showString("" + freq + units)
}
function updatePW () {
    pins.analogWritePin(AnalogPin.P0, 10.24 * pulseWidth)
    basic.showString("" + pulseWidth + "%")
}
let units = ""
let freq = 0
let freqList: number[] = []
let pwFreq = false
let freqIndex = 0
let pulseWidth = 0
pulseWidth = 50
freqIndex = 7
pwFreq = true
array()
updatePW()
updateFrequency()
