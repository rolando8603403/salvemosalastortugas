basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 26) {
        music.ringTone(784)
        basic.showIcon(IconNames.Sad)
        basic.showString("T.baja")
    } else if (input.temperature() > 34) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.ForeverInBackground)
        basic.showNumber(input.temperature())
        basic.showString("T.alta")
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() > 26 && input.temperature() <= 34) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.ForeverInBackground)
        basic.showNumber(input.temperature())
        basic.showString("T.normal")
        basic.showIcon(IconNames.Yes)
    }
})
