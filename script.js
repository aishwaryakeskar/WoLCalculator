let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';

const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const inputNumber = (number) => {
    if(currentInput==='0') {
        currentInput = number;
    }
    else {
        currentInput += number;
    }
}

const inputOperator = (operator) => {
    prevInput = currentInput;
    calculationOperator = operator;
    currentInput ='0';
}

const calculate = () => {
    result = 0;
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(prevInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(prevInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    calculationOperator = '';
}

const numbers = document.querySelectorAll(".number");

numbers.forEach( (number) => {
    number.addEventListener("click",(event) => {
        inputNumber(event.target.value);
        updateScreen(currentInput);
    })
})

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click",() => {
    calculate()
    updateScreen(currentInput)
})

const clearButton = document.querySelector(".all-clear");

const clearAll = () => {
    prevInput = '0'
    calculationOperator = ''
    currentInput = '0'
}

clearButton.addEventListener("click", () => {
    clearAll()
    updateScreen(currentInput)
})

const percentageBtn = document.querySelector(".percentage");

percentageBtn.addEventListener("click", () => {
    currentInput /= 100;
    updateScreen(currentInput)
})

const decimalPoint = document.querySelector(".decimal");

decimalPoint.addEventListener("click", () => {
    currentInput += ".";
    updateScreen(currentInput)
})