basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 26) {
        basic.showString("T.baja")
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.showString("T.alta")
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() > 26 && input.temperature() <= 34) {
        basic.showNumber(input.temperature())
        basic.showString("T.normal")
        basic.showIcon(IconNames.Yes)
    }
})
