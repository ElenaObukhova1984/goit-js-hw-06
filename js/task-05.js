"use strict";

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const textOfInput = event => {
   
   
    outputRef.textContent = event.currentTarget.value || 'Anonymous';


}
inputRef.addEventListener('input', textOfInput);

