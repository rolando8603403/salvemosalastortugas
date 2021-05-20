def on_forever():
    basic.show_number(input.temperature())
    if input.temperature() < 23:
        basic.show_icon(IconNames.SAD)
    elif input.temperature() > 25:
        basic.show_number(input.temperature())
        basic.show_icon(IconNames.HAPPY)
    else:
        if input.temperature() >= 23 and input.temperature() <= 25:
            basic.show_number(input.temperature())
basic.forever(on_forever)
