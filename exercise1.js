// Exercise 1 – Multi-Button Highlight
const buttons = document.querySelectorAll('.color-btn');

function changeColor() {
    this.style.backgroundColor = 'yellow'; // 'this' refers to clicked button
}

buttons.forEach(button => button.addEventListener('click', changeColor));
