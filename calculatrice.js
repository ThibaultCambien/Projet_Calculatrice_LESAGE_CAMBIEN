const display = document.querySelector('#display');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');

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

//Gestion du bouton clear
clearButton.addEventListener('click', () => {
    display.textContent = '';
    currentInput = '';
});

