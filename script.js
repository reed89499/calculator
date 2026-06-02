function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

let operator = undefined;
let numA = '';
let numB = '';
let operatorSet = false; // this boolean operator is required to let button event listener know whether to add numbers to numA or numB

function operate(a, b, operator) { //evaluates expression depending on what operator is supplied
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

const display = document.querySelector('#display');

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList == 'operator' && button.id != 'equal') { //checks if the button pressed is an operator then sets operator as operator variable, also sets operator set to true
            operator = button.textContent;
            operatorSet = true;
            display.textContent = numA + ' ' + operator;
        } else if (button.id == 'equal' && (numA === '' || numB === '' || operatorSet === false)) {
            display.textContent = 'ERROR';
        } else if (button.id == 'equal' && operator === '/' && (numA == 0 || numB == 0)) {
            display.textContent = 'Can\t divide by zero';
        } else if(button.id == 'equal') { //checks if button is equal, evaluates expression, resets number B and logs result as number A for continued math
            numA = Math.round(operate(Number(numA), Number(numB), operator));
            numB = '';
            display.textContent = numA;
        } else if (button.classList == 'number' && operatorSet == false) { //if operator has not been set yet, puts numbers into numb A
            numA = numA + button.textContent;
            display.textContent = numA;
        } else if (button.classList == 'number' && operatorSet == true) { //if operator has been set, puts numbers into number B
            numB = numB + button.textContent;
            display.textContent = numA + ' ' + operator + ' ' + numB;
        } else if (button.id == 'clear') {
            numA = '';
            numB = '';
            operator = undefined;
            operatorSet = false;
            display.textContent = '';
        }
    })
});

