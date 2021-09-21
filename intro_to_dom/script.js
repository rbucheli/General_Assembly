// alert("JS is connected");

// select an element by id
// Assigned the following element by ID
const titleEL = document.getElementById("title");

// console.log(titleEL);

// changing the color of my title
titleEL.style.color = "orange";

// select an element that might not have an id attribute
const titleEl2 = document.querySelector(".main-title");
console.log(titleEl2);

// searching for an non-existent element
// const aTag = document.querySelector('a');
// console.log(aTag);

// const pEl = documemt.querySelector("cool");
// console.log(pEl);

// to change inner html type:
// titleEL.innerHTML = "Hello Greatness"

// shrinking text
// titleEl.innerHTML = "<small>Hello Greatness</small?>";

//changing color

// checking for an attribute
titleEL.getAttribute("class");

// pEl.setAttribute("id", "random-words");

// Select the a tag and "set" the href attribute to http://google.com

// David's solution
const atag = document.querySelector("a");
atag.setAttribute("href", "https://google.com/")

const commentEls = document.querySelectorAll(".comment");

console.log(commentEls);

// Ayla's example
for (let commentEl of commentEls) {
  commentEl.style.fontSize = "30px"
}

// for...of loop that changes the font size

