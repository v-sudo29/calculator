// GLOBAL VARIABLES
const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
let displayValue = 0;
let count = 0;
let dotCount = 0;
let firstNum = null;
let secondNum = null;
let operator = null;
let operatorClicked = false;
let keyPressed = false;
let shiftPressed = false;

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

// FUNCTION: Populate display when numbers clicked or number keys pressed
function populate(num) {
let currentDigits = document.getElementById('digits').textContent;
let digit = null;

    // If keyboard pressed
    if (keyPressed === true) {
        digit = num;
    } else if (keyPressed === false) {
        digit = document.getElementById(num).textContent;
    }

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

// FUNCTION: sign 
function sign() {
    let currentDigits = document.getElementById('digits').textContent;
    console.log(currentDigits);
    if (currentDigits > 0) {
        currentDigits = parseFloat(currentDigits);
        currentDigits = '-' + currentDigits;
        document.querySelector('#digits').textContent = currentDigits;
    } else if (currentDigits < 0) {
        currentDigits = currentDigits.slice(1);
        document.querySelector('#digits').textContent = currentDigits;
    }

    if (operatorClicked === false) {
        firstNum = currentDigits;
    } else if (operatorClicked === true) {
        secondNum = currentDigits;
    }
}

// FUNCTION: percent
function percent() {
    let currentDigits = document.getElementById('digits').textContent;
    currentDigits = parseFloat(currentDigits);
    document.querySelector('#digits').textContent = currentDigits / 100;
}

// FUNCTION: dot
function dot() {
    let currentDigits = document.getElementById('digits').textContent;
    if (dotCount === 0) {
        document.querySelector('#digits').textContent = currentDigits + '.';
        dotCount++;
    }
    return;
}

// FUNCTION: clicked abstraction
function clicked() {
    operatorClicked = true;
    count = 0;
    dotCount = 0;
}

// BUTTONS: Listen for clicks and hover
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
const dotbtn = document.querySelector('#dot');
const signbtn = document.querySelector('#sign');
const percentbtn = document.querySelector('#percent');
const resetbtn = document.querySelector('#reset');
const addbtn = document.querySelector('#add');
const subtractbtn = document.querySelector('#subtract');
const multiplybtn = document.querySelector('#multiply');
const dividebtn = document.querySelector('#divide');
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

    // Dot
    dotbtn.addEventListener('click', dot);

    // Sign
    signbtn.addEventListener('click', sign);

    // Percent
    percentbtn.addEventListener('click', percent);

    // Reset
    resetbtn.addEventListener('click', reset);

    // Operators
    addbtn.addEventListener('click', () => {
        clicked();
        operator = 'add';
    });   
    subtractbtn.addEventListener('click', () => {
        clicked();
        operator = 'subtract';
    });
    multiplybtn.addEventListener('click', () => {
        clicked();
        operator = 'multiply';
    });
    dividebtn.addEventListener('click', () => {
        clicked();
        operator = 'divide';
    });

    // Equals
    equalsbtn.addEventListener('click', () => {
        firstNum = parseFloat(firstNum);
        secondNum = parseFloat(secondNum);
        let total = null;

        if (operator === 'add') {
            total = sum(firstNum, secondNum);
            document.querySelector('#digits').textContent = total;
            firstNum = total;
        } else if (operator === 'subtract') {
            total = subtract(firstNum, secondNum);
            document.querySelector('#digits').textContent = total;
            firstNum = total;
        } else if (operator === 'multiply') {
            total = multiply(firstNum, secondNum);
            document.querySelector('#digits').textContent = total;
            firstNum = total;
        } else if (operator === 'divide') {
            if (secondNum === 0) {
                alert("Cannot divide by 0");
                return;
            }
            total = divide(firstNum, secondNum);
            document.querySelector('#digits').textContent = total;
            firstNum = total;
        }
        operatorClicked = false;
        count = 0;
    });

    // Hover changes color
    buttons.forEach((button) => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'white';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#f0f0f0';
        });
    });

// Keyboard support
body.addEventListener('keydown', function(e) {
    const key = e.key;
    let currentDigits = document.querySelector('#digits').textContent;
    console.log(key);
    // Backspace
    if (key === 'Backspace' || key === 'delete') {

        // If current count is 1, replace with 0
        if (count === 1) {
            document.querySelector('#digits').textContent = '0';
            count = 0;
        } else if (count > 1) {
            document.querySelector('#digits').textContent = 
            currentDigits.slice(0, currentDigits.length - 1);
            count --;
        }
    }

    // Dot
    if (key === '.') {
        let currentDigits = document.getElementById('digits').textContent;
        if (dotCount === 0) {
            document.querySelector('#digits').textContent = currentDigits + '.';
            dotCount++;
        }
        return;
    }

    // Numbers
    if (parseInt(key) >= 0 && parseInt(key) <= 9) {
        keyPressed = true;
        populate(key);
        keyPressed = false;
    }

    // Operators
    if (key === 'Shift') {
        shiftPressed = true;
    }

        // Add
        if (key === '+' && shiftPressed === true) {
            clicked();
            operator = 'add';
        }

        // Subtract
        if (key === '-') {
            clicked();
            operator = 'subtract';
        }

        // Multiply
        if (key === '*' && shiftPressed === true) {
            clicked();
            operator = 'multiply';
        }

        // Divide
        if (key === '/') {
            clicked();
            operator = 'divide';
        }
    
    // Equals
    if (key === '=' || key === 'Enter') {
        firstNum = parseFloat(firstNum);
        secondNum = parseFloat(secondNum);
        let total = null;

        if (operator === 'add') {
            total = sum(firstNum, secondNum);
            document.querySelector('#digits').textContent = total;
            firstNum = total;
        } else if (operator === 'subtract') {
            total = subtract(firstNum, secondNum);
            document.querySelector('#digits').textContent = total;
            firstNum = total;
        } else if (operator === 'multiply') {
            total = multiply(firstNum, secondNum);
            document.querySelector('#digits').textContent = total;
            firstNum = total;
        } else if (operator === 'divide') {
            if (secondNum === 0) {
                alert("Cannot divide by 0");
                return;
            }
            total = divide(firstNum, secondNum);
            document.querySelector('#digits').textContent = total;
            firstNum = total;
        }
        operatorClicked = false;
        count = 0;
    }
});

body.addEventListener('keyup', () => (shiftPressed = false));