"use strict";

const btnRef = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    btnRef.textContent = counterValue;

});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    btnRef.textContent = counterValue;

});


