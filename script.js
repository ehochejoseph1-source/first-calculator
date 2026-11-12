
let display = document.getElementById("display");
let error = document.getElementById("error");

let buttons = document.querySelectorAll(".number")

let DisplayedResult = false;
let addBtn = document.getElementById("addBtn");
let subtractBtn = document.getElementById("subtractBtn");
let multiplyBtn = document.getElementById("multiplyBtn");
let divideBtn = document.getElementById("divideBtn");
let clearBtn = document.getElementById("clearBtn");
let equalBtn = document.getElementById("equals")
let zero = document.getElementById("zero") 
let point = document.getElementById("point")
let backspaceBtn = document.getElementById("backspaceBtn")



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
        return Number(add(first,second).toFixed(3))
    }else if (operator === "-") {
        return Number(subtract(first,second).toFixed(3))
    }else if (operator === "*") {
        return Number(multiply(first,second).toFixed(3))
    }else if (operator === "/") {
        return Number(divide(first,second).toFixed(3))
    }

}

let firstNumber = "" ;
let secondNumber = "";
let operator = "";
let currentNumber = ""
buttons.forEach(number => {
    number.addEventListener("click", function(){
      if (!DisplayedResult) {
        currentNumber += number.textContent
        display.textContent = currentNumber 
      }
        if (DisplayedResult) {
            clearBtn.click()
            currentNumber += number.textContent
          display.textContent = currentNumber 
        }
    })
})

addBtn.addEventListener("click", function() {
   
   
    if(operator !== "" && currentNumber !== "") {
        secondNumber = currentNumber;
        
        result = operate(operator, Number(firstNumber), Number(secondNumber));
         display.textContent = result;
         firstNumber = result;
        currentNumber = "";
        secondNumber = ""
       
    } 
   else if (operator !== "") {
     operator = "+"
   }
     else{
         firstNumber = currentNumber 
        currentNumber = ""
        
    }
     operator = "+"
     DisplayedResult = false
})
subtractBtn.addEventListener("click", function() {
    if(operator !== "" && currentNumber !== "") {
        secondNumber = currentNumber;

        result = operate(operator, Number(firstNumber), Number(secondNumber));
         display.textContent = result;
         firstNumber = result;
        currentNumber = "";
        secondNumber = ""
       
    } else if (operator !== "") {
     operator = "-"
    }
     else{
         firstNumber = currentNumber 
        currentNumber = ""
    }
     operator = "-" 
     DisplayedResult = false
})
multiplyBtn.addEventListener("click", function() {
    if(operator !== "" && currentNumber !== "") {
        secondNumber = currentNumber;

        result = operate(operator, Number(firstNumber), Number(secondNumber));
         display.textContent = result;
         firstNumber = result;
        currentNumber = "";
        secondNumber = ""
       
    } 
     else if (operator !== "") {
     operator = "*"
    }
     else{
         firstNumber = currentNumber 
        currentNumber = ""
    }
     operator = "*"
     DisplayedResult = false
})
divideBtn.addEventListener("click", function() {
    if(operator !== "" && currentNumber !== "") {
        secondNumber = currentNumber;

        result = operate(operator, Number(firstNumber), Number(secondNumber));
         display.textContent = result;
         firstNumber = result;
        currentNumber = "";
        secondNumber = ""
       
    } 
    else if (operator !== "") {
     operator = "/"
    }
     else{
         firstNumber = currentNumber 
        currentNumber = ""
    }
     operator = "/"
     DisplayedResult = false;  
})
zero.addEventListener("click", function(){
    if (display.textContent === "0"){
        currentNumber = "";
    }
})
equalBtn.addEventListener("click", function(){
    if (operator === "" || firstNumber === "" || currentNumber === "") {
       return;
    } else  {
        secondNumber = currentNumber
    let result = operate(operator, Number(firstNumber), Number(secondNumber))

    display.textContent = result
        DisplayedResult = true
    firstNumber = result 
    currentNumber = ""
    secondNumber = ""
    }
})
clearBtn.addEventListener("click", () => {
    display.textContent= "0"
    currentNumber = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
})
point.addEventListener("click", () => {
    if (currentNumber.includes(".")){
        currentNumber += ""
    }else if (currentNumber === ""){
     currentNumber = "0."
   }
    else {
    currentNumber += "."
   }
    display.textContent = currentNumber
})

backspaceBtn.addEventListener("click", () => {
     if (operator === "" || firstNumber === "" || currentNumber === "") {
      currentNumber = currentNumber.slice(0, -1)
   
    } 
     if (firstNumber !== "" && operator !== "") {
        return;
    }
     display.textContent = currentNumber
     event.stopPropagation() 
})

document.addEventListener("keydown", function (event) {
    console.log(event.key)
    if (event.key >= "0" && event.key <= "9") {
        currentNumber += `${event.key}`
        display.textContent = currentNumber
    }
    if (event.key === ".") {
        event.preventDefault()
        point.click()
    }
    if (event.key === "Enter") {
        event.preventDefault()
        equalBtn.click()
    }
    if (event.key === "Backspace") {
        event.preventDefault()
        backspaceBtn.click()
    }
    if (event.key === "Escape") {
        event.preventDefault()
        clearBtn.click()
    }
    if (event.key === "+") {
        addBtn.click()
    }
    if (event.key === "-") {
        subtractBtn.click()
    }
    if (event.key === "*") {
        multiplyBtn.click()
    }
    if (event.key === "/") {
        divideBtn.click()
    }
})