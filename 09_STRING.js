let str = "Hello JavaScript";

console.log("Original String:", str);

// Length
console.log("Length:", str.length);

// Uppercase
console.log("Uppercase:", str.toUpperCase());

// Lowercase
console.log("Lowercase:", str.toLowerCase());

// Character at index
console.log("Character at 0:", str.charAt(0));

// Index of word
console.log("Index of 'Java':", str.indexOf("Java"));

// Includes
console.log("Includes 'Script':", str.includes("Script"));

// Slice
console.log("Slice (0,5):", str.slice(0,5));

// Replace
console.log("Replace JavaScript with JS:", str.replace("JavaScript", "JS"));

// Trim
let newStr = "   Sam Jain   ";
console.log("Trimmed:", newStr.trim());

// Split
let sentence = "I love coding";
let words = sentence.split(" ");
console.log("Split:", words);

// Template Literal
let name = "Sam";
let age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);