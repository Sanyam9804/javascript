let fullname = "sam jain"  // string
let age = 21        // number
flag = true;        // boolean
x = null;           // object
y = undefined;      // undefined
z = BigInt("123");  // bigint
s = Symbol("HELLO JS!") // symbol 

console.log(typeof(fullname))
console.log(typeof(age))
console.log(typeof(flag))
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(z))
console.log(typeof(s))

// OBJECT

const student = {
    Name:"sam",
    Age:20,
    Batch:"C1"
};
console.log(student)
console.log(typeof(student))
console.log(student.Age)        // student["Age"]

student.Age = 32
console.log(student.Age)