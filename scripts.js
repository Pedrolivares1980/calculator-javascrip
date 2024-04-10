const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            // Clear the display
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            // Remove the last character from the string
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            // Evaluate the expression and display the result
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal') {
            // Display Null in case of empty string
            display.innerText = 'Null';
            // Clean the desplay after 2secs
            setTimeout(() => (display.innerText = ''), 2000);
        }else{
            display.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};
