"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

btnChangeColor.addEventListener("click", handleClick);

function handleClick() {
  colorRef.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = getRandomHexColor(); 
};