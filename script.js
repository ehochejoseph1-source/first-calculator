
let display = document.getElementById("display");
let error = document.getElementById("error");

let buttons = document.querySelectorAll(".number")


let addBtn = document.getElementById("addBtn");
let subtractBtn = document.getElementById("subtractBtn");
let multiplyBtn = document.getElementById("multiplyBtn");
let divideBtn = document.getElementById("divideBtn");
let clearBtn = document.getElementById("clearBtn");
let equalBtn = document.getElementById("equals")
let zero = document.getElementById("zero") 





function add(first, second){
    return first + second;
}
function subtract(first, second){
    return first - second;
}
function multiply(first, second){
    return first * second;
}
function divide(first, second){
    return first / second;
}
function operate(operator,first,second) {
    if (operator === "+") {
        return add(first,second)
    }else if (operator === "-") {
        return subtract(first,second)
    }else if (operator === "*") {
        return multiply(first,second)
    }else if (operator === "/") {
        return divide(first,second)
    }

}

let firstNumber = "" ;
let secondNumber = "";
let operator = "";
let currentNumber = ""
buttons.forEach(number => {
    number.addEventListener("click", function(){
        currentNumber += number.textContent
        display.textContent = currentNumber 
    })
})

addBtn.addEventListener("click", function() {
    firstNumber = currentNumber 
    currentNumber = ""
    operator += "+" 
})
subtractBtn.addEventListener("click", function() {
    firstNumber = currentNumber 
    currentNumber = ""
    operator += "-" 
})
multiplyBtn.addEventListener("click", function() {
    firstNumber = currentNumber 
    currentNumber = ""
    operator += "*" 
})
divideBtn.addEventListener("click", function() {
    firstNumber = currentNumber 
    currentNumber = ""
    operator += "/" 
})
zero.addEventListener("click", function(){
    if (display.textContent === "0"){
        currentNumber = "";
    }
})
equalBtn.addEventListener("click", function(){
    secondNumber = currentNumber
    let result = operate(operator, Number(firstNumber), Number(secondNumber))

    display.textContent = result
})
clearBtn.addEventListener("click", () => {
    display.textContent= "0"
    currentNumber = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
})
