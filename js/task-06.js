"use strict";

const inputRef = document.querySelector("#validation-input");
// console.log(inputRef);

const inputLength = inputRef.getAttribute("data-length");
// console.log(inputLength);
// console.log(typeof(inputLength));


const inputBlur = event => {
    if (event.currentTarget.value.length === Number(inputLength)) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    } else { event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");

    }

}

inputRef.addEventListener('blur', inputBlur);






