// Add function
function sum(...num) {
     let sum = num.reduce((a, b) => a + b, 0);
    return sum;
}

// Subtract function
function subtract(...num) {
    let sum = num.reduce((a, b) => {
        return a - b;
    });
    return sum;
}
