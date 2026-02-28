// Create Array
let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// Length
console.log("Length:", arr.length);

// Access element
console.log("First Element:", arr[0]);
console.log("Last Element:", arr[arr.length - 1]);

// Add element at end
arr.push(60);
console.log("After push:", arr);

// Remove last element
arr.pop();
console.log("After pop:", arr);

// Add element at beginning
arr.unshift(5);
console.log("After unshift:", arr);

// Remove first element
arr.shift();
console.log("After shift:", arr);

// Index of element
console.log("Index of 30:", arr.indexOf(30));

// Includes
console.log("Includes 40:", arr.includes(40));

// Slice (does not modify original)
console.log("Slice (1,3):", arr.slice(1,3));

// Splice (modifies original)
arr.splice(2, 1);   // remove 1 element at index 2
console.log("After splice:", arr);

// Loop through array (for loop)
console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for...of loop
console.log("Using for...of:");
for (let value of arr) {
    console.log(value);
}

// Map (create new array)
let doubled = arr.map(num => num * 2);
console.log("Doubled Array:", doubled);

// Filter
let greaterThan20 = arr.filter(num => num > 20);
console.log("Greater than 20:", greaterThan20);

// Reduce (sum of array)
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);