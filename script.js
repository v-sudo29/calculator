// GLOBAL VARIABLES
const buttons = document.querySelectorAll('grid-items');
let displayValue = 0;
let count = 0;
let firstNum = null;
let secondNum = null;
let operator = null;
let operatorClicked = false;

// FUNCTION: add
function sum(...num) {
    let sum = num.reduce((a, b) => a + b);
    count = 0;
    return sum;
}

// FUNCTION: subtract
function subtract(...num) {
    let sum = num.reduce((a, b) => a - b);
    count = 0;
    return sum;
}

// FUNCTION: multiply
function multiply(...num) {
    let product = num.reduce((a, b) => a * b);
    count = 0;
    return product;
}

// FUNCTION: divide
function divide(...num) {
    let quotient = num.reduce((a, b) => a / b);
    count = 0;
    return quotient; 
}

// FUNCTION: operate
function operate(operator, a, b) {
    if (operator === '+') {
        return sum(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    } 
    return;
}

// FUNCTION: Populate display when click number buttons
function populate(num) {
    let digit = document.getElementById(num).textContent;
    let currentDigits = document.getElementById('digits').textContent;

    // Return if digit count is more than 7
    if (count > 6) {
        return;
    }

    // If an operator has not been clicked, populate
    if (operatorClicked === false) {

        // Replace digit w/ new digit else concatenate new digit
        if (currentDigits === '0' && digit !== '0') {
            document.querySelector('#digits').textContent = digit;
            firstNum = digit;
        } else if (currentDigits === '0' && digit === '0'){
            document.querySelector('#digits').textContent = digit;
            firstNum = digit;
            count = 0;
            return;
        } else {
            document.querySelector('#digits').textContent = currentDigits + digit;
            firstNum = currentDigits + digit;
        }
        count++;
    } else {

        // Replace current digits w/ new digit
        if (count === 0) {
            document.querySelector('#digits').textContent = digit;
            secondNum = digit;
        } else {
            document.querySelector('#digits').textContent = currentDigits + digit;
            secondNum = currentDigits + digit;
        }
        count++;
    }
    console.log(`First number: ${firstNum} Second number: ${secondNum}`);

    // Style digit
    let span = document.querySelector('#digits');
    span.style.position = 'absolute';
    span.style.bottom = '0';
    span.style.right = '0';
    span.style.fontSize = '60px';
    span.style.fontFamily = 'Verdana';
}

// FUNCTION: reset display
function reset() {
    document.querySelector('#digits').textContent = 0;
    count = 0;
}

// BUTTONS: Listen for clicks
const btn0 = document.querySelector('#zero');
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const btn4 = document.querySelector('#four');
const btn5 = document.querySelector('#five');
const btn6 = document.querySelector('#six');
const btn7 = document.querySelector('#seven');
const btn8 = document.querySelector('#eight');
const btn9 = document.querySelector('#nine');
const resetbtn = document.querySelector('#reset');
const addbtn = document.querySelector('#add');
const equalsbtn = document.querySelector('#equals');

    // Numbers
    btn0.addEventListener('click', () => populate('zero'));
    btn1.addEventListener('click', () => populate('one'));
    btn2.addEventListener('click', () => populate('two'));
    btn3.addEventListener('click', () => populate('three'));
    btn4.addEventListener('click', () => populate('four'));
    btn5.addEventListener('click', () => populate('five'));
    btn6.addEventListener('click', () => populate('six'));
    btn7.addEventListener('click', () => populate('seven'));
    btn8.addEventListener('click', () => populate('eight'));
    btn9.addEventListener('click', () => populate('nine'));

    // Reset
    resetbtn.addEventListener('click', reset);

    // Operators
    addbtn.addEventListener('click', () => {
        operatorClicked = true;
        count = 0;
        operator = 'add';
    });

    // Equals
    equalsbtn.addEventListener('click', () => {
        firstNum = parseInt(firstNum);
        secondNum = parseInt(secondNum);
        let total = null;

        if (operator === 'add') {
            total = sum(firstNum, secondNum);
            document.querySelector('#digits').textContent = total;
            firstNum = total;
        }
        operatorClicked = false;
        count = 0;
    });