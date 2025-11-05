const display = document.querySelector('#display');

let number1 = null;
let operator = null;
let number2 = null;


const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

if (display && display.textContent === '') {
    display.textContent = '0';
}

// Gestion des chiffres
numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const digit = event.currentTarget.dataset.number;
        addDigit(digit);
    });
});

function addDigit(digit) {
    if (operator === null) {
        if (number1 === '0' && digit === '0') {
            return;
        }
        number1 = (number1 === null) ? digit : number1 + digit;
        display.textContent = number1;
    } else {
        if (number2 === '0' && digit === '0') {
            return;
        }
        number2 = (number2 === null) ? digit : number2 + digit;
        display.textContent = number1 + operator + number2;
    }
}

// Gestion des opérateurs
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedOperator = button.getAttribute('data-operator');
        SelectOperator(selectedOperator);
    });
});

function SelectOperator(selectedOperator) {
    if (number1 !== null && operator === null) {
        operator = selectedOperator;
        display.textContent = number1 + operator;
    }
}

// Gestion du bouton clear
clearButton.addEventListener('click', () => {
    display.textContent = '0';
    number1 = null;
    operator = null;
    number2 = null;
});

// Gestion du bouton égal
equalsButton.addEventListener('click', () => {
    if (number1 !== null && operator !== null && number2 !== null) {
        const result = calculate(number1, number2, operator);
        display.textContent = result;
        number1 = result.toString();
        operator = null;
        number2 = null;
    }});

function calculate() {
        const a = parseFloat(number1);
        const b = parseFloat(number2);
        let result = 0;
    
        switch (operator) {
            case '+': result = a + b
                break;
            case '-': result = a - b
                break;
            case '*': result = a * b
                break;
            case '/': result = a / b
                break;
        }
        return result;
    }