let heading = document.getElementById("heading");
let button = document.getElementById("btn");
let inputBox = document.getElementById("inputBox");

// 1️⃣ Click Event
button.addEventListener("click", function() {
    heading.innerText = "Button Clicked 🔥";
});

// 2️⃣ Mouse Over Event
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "yellow";
});

// 3️⃣ Mouse Out Event
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "";
});

// 4️⃣ Keypress Event
inputBox.addEventListener("keypress", function(event) {
    console.log("Key Pressed:", event.key);
});

// 5️⃣ Change Event
inputBox.addEventListener("change", function() {
    alert("Input Changed to: " + inputBox.value);
});