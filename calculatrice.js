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