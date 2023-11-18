let passos = 0
input.onButtonPressed(Button.A, function () {
    passos = 0
})
input.onGesture(Gesture.Shake, function () {
    passos += 1
    basic.showNumber(passos)
    if (passos == 25) {
        basic.showString("Parabens")
    } else {
        basic.showNumber(passos)
    }
})
