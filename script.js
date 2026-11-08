
let display = document.getElementById("display");
let error = document.getElementById("error");

let addBtn = document.getElementById("addBtn");
let subtractBtn = document.getElementById("subtractBtn");
let multiplyBtn = document.getElementById("multiplyBtn");
let divideBtn = document.getElementById("divideBtn");
let modulusBtn = document.getElementById("modulusBtn");
let squareBtn = document.getElementById("squareBtn");
let clearBtn = document.getElementById("clearBtn");




let firstNumber  ;
let secondNumber;
let operator;
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