const display = document.querySelector('#display');

let currentValue = '';

const numberButtons = document.querySelectorAll('[data-number]');

if (display && display.textContent === '') {
    display.textContent = '0';
}

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const digit = event.currentTarget.dataset.number;
        addDigit(digit);
    });
});

function addDigit(digit) {

    if (display.textContent === '0') {
        display.textContent = digit;
    } else {
        display.textContent += digit;
    }

    currentValue = display.textContent;
}

const operatorButtons = document.querySelectorAll('.operator');

let currentInput = '';

//Gestion des opérateurs
operatorButtons.forEach(button => {
    button.addEventListener('click', () => handleOperator(button.getAttribute('data-operator')));
});

function handleOperator(operator) {
    const lastChar = display.textContent.slice(-1);
    if ('+-*/'.includes(lastChar)) return;
    display.textContent += operator;
    currentInput = display.textContent;
}