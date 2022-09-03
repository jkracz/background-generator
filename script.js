 // import syntax comes with es6, and we can use it with webpack
 //import { without } from "lodash";

 // before es6, we needed to import packages using browserify
 var _ = require('lodash');

 var arr = [1,2,3,4,5,6,7,8];
 console.log(_.without(arr, 3));
 // browserify isn't used as much anymore, but you can use it to create a bundle in cases where you can't use webpack

 var css = document.querySelector("h3");
 var color1 = document.querySelector(".color1");
 var color2 = document.querySelector(".color2");
 var body = document.getElementById("gradient");

function changeBackground() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 

    // adds some text content to the DOM
    css.textContent = body.style.background + ";";
}

// use input event
color1.addEventListener("input", () => {
    changeBackground();
})

color2.addEventListener("input", () => {
    changeBackground();
})