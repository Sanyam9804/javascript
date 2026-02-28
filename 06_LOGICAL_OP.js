let age = 20;
let hasLicense = true;
let isStudent = false;

// AND (&&)
// True only if BOTH conditions are true
console.log("AND Example:");
console.log(age > 18 && hasLicense);   // true
console.log(age > 25 && hasLicense);   // false


// OR (||)
// True if ANY one condition is true
console.log("OR Example:");
console.log(age > 25 || hasLicense);   // true
console.log(age > 25 || isStudent);    // false


// NOT (!)
// Reverses the boolean value
console.log("NOT Example:");
console.log(!hasLicense);   // false
console.log(!isStudent);    // true