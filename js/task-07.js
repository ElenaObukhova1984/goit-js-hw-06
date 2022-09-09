"use strict";

const inputRef = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");



const  changeTextSize = event => {
    inputText.style.fontSize = `${event.currentTarget.value}px`
};

inputRef.addEventListener("input", changeTextSize);