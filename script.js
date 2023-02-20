// Add function
function sum(...num) {
     let sum = num.reduce((a, b) => a + b);
    return sum;
}

// Subtract function
function subtract(...num) {
    let sum = num.reduce((a, b) => a - b);
    return sum;
}

// Multiply function
function multiply(...num) {
    let product = num.reduce((a, b) => a * b);
    return product;
}

// Divide function
function divide(...num) {
    let quotient = num.reduce((a, b) => a / b);
    return quotient; 
}