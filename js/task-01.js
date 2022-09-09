"use strict";

const itemsRef = document.querySelectorAll(".item");
// console.log(itemsRef);

console.log("Number of categories:", itemsRef.length);

itemsRef.forEach(item => {
    const titleOfCategory = item.querySelector("h2");
    // console.log(titleOfCategory);

    const numberOfItems = item.querySelectorAll("li");
    // console.log(numberOfItems);

    console.log("Category:", titleOfCategory.textContent);
    console.log("Elements:", numberOfItems.length);

})


