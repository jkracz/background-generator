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