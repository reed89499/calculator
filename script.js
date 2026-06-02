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
let operatorSet = false;

function operate(a, b, operator) {
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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList == 'operator' && button.id != 'equal') { //checks if the button pressed is an operator then sets operator as operator variable, also sets operator set to true
            operator = button.textContent;
            operatorSet = true;
        } else if (button.id == 'equal') { //checks if button is equal, evaluates expression, resets number B and logs result as number A for continued math
            numA = operate(Number(numA), Number(numB), operator);
            numB = '';
            console.log(numA)
        } else if (button.classList == 'number' && operatorSet == false) { //if operator has not been set yet, puts numbers into numb A
            numA = numA + button.textContent;
            console.log(numA);
        } else if (button.classList == 'number' && operatorSet == true) { //if operator has been set, puts numbers into number B
            numB = numB + button.textContent;
            console.log(numB);
        }
    })
});