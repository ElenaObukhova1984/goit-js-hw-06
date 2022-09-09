"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const elements = ingredients.map(ingredient => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = `${ingredient}`;
  return itemRef;

});
console.log(elements);

const listRef = document.querySelector("#ingredients");
// console.log(listRef);

listRef.append(...elements);
console.log(listRef);
