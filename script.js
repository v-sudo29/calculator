// GLOBAL VARIABLES
let displayValue = 0;
const buttons = document.querySelectorAll('grid-items');
let count = 0;

// FUNCTION: add
function sum(...num) {
     let sum = num.reduce((a, b) => a + b);
    return sum;
}

// FUNCTION: subtract
function subtract(...num) {
    let sum = num.reduce((a, b) => a - b);
    return sum;
}

// FUNCTION: multiply
function multiply(...num) {
    let product = num.reduce((a, b) => a * b);
    return product;
}

// FUNCTION: divide
function divide(...num) {
    let quotient = num.reduce((a, b) => a / b);
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

    // Replace digit w/ new digit else concatenate new digit
    if (count === 0) {
        document.querySelector('#digits').textContent = digit;
    } else {
        document.querySelector('#digits').textContent = currentDigits + digit;
    }

    // Style digit
    let span = document.querySelector('#digits');
    span.style.position = 'absolute';
    span.style.bottom = '0';
    span.style.right = '0';
    span.style.fontSize = '60px';
    span.style.fontFamily = 'Verdana';

    count++;
}

// FUNCTION: reset display
function reset() {
    document.querySelector('#digits').textContent = 0;
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