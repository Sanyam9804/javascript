// for loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// while loop
console.log("While Loop:");
let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}


// do-while loop
console.log("Do-While Loop:");
let b = 1;
do {
    console.log(b);
    b++;
} while (b <= 5);


// for...of loop (used for arrays)
console.log("For...of Loop:");
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}


// for...in loop (used for objects)
console.log("For...in Loop:");
let student = {
    name: "Sam",
    age: 21,
    batch: "C1"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}