basic.showIcon(IconNames.Angry)
basic.forever(function () {
    basic.showNumber(modules.rotaryEncoder1.position())
    modules.led1.setPixelColor(modules.rotaryEncoder1.position(), 0xff0000)
    if (modules.rotaryEncoder1.position() > 7 || modules.rotaryEncoder1.position() < 0) {
        modules.led1.setAll(0x000000)
    }
})
