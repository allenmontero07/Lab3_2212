// Exercise 4 – Arrow Function Bug
const box = document.querySelector('.box');

box.addEventListener('click', (event) => {
    // Arrow function doesn't have its own 'this', so we use event.currentTarget
    event.currentTarget.classList.add('active');
});
