// Select elements
let heading = document.getElementById("heading");
let button = document.getElementById("btn");

// Add event listener
button.addEventListener("click", function() {

    heading.innerText = "DOM is Awesome 🔥";
    heading.style.color = "red";
    heading.style.fontSize = "40px";

});