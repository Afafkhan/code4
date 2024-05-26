let Num1 = 0
let Num2 = 0
let Result = 0
input.onButtonPressed(Button.A, function () {
    Num1 = 18
    Num2 = 50
    if (Num1 < Num2) {
        Result = Num2 - Num1
        basic.showNumber(Result)
    }
    basic.showIcon(IconNames.No)
})
