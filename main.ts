input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    Player_A += 1
    Update_Score()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    Ties += 1
    Update_Score()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # . # . .
        # . . # .
        # # # . .
        `)
    Player_B += 1
    Update_Score()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Update_Score () {
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + Player_A)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + Player_B)
    OLED.newLine()
    OLED.writeStringNewLine("Ties: " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
}
function Reset () {
    OLED.init(128, 64)
    Player_A = 0
    Player_B = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("PLAY THE GAME or else")
    basic.pause(2000)
    Update_Score()
}
let Rounds = 0
let Player_B = 0
let Ties = 0
let Player_A = 0
Reset()
