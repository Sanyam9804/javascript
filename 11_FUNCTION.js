// Simple Function
function greet() {
    console.log("Hello World");
}
greet();   // Calling function


// Function with Parameters
function add(a, b) {
    console.log("Sum:", a + b);
}
add(5, 3);


// Function with Return Value
function multiply(x, y) {
    return x * y;
}
let result = multiply(4, 6);
console.log("Multiplication:", result);


// Function Expression
const subtract = function(a, b) {
    return a - b;
};
console.log("Subtraction:", subtract(10, 4));


// Arrow Function
const divide = (a, b) => {
    return a / b;
};
console.log("Division:", divide(20, 5));


// Short Arrow Function (one line)
const square = n => n * n;
console.log("Square:", square(5));


// Default Parameters
function greetUser(name = "Guest") {
    console.log("Hello", name);
}
greetUser();
greetUser("Sam");


// Rest Parameter
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Total:", sumAll(1,2,3,4,5));