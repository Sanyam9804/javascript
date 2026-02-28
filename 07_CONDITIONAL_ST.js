let age = 20;
let marks = 85;
let day = 3;

// if Statement
if (age >= 18) {
    console.log("You are eligible to vote");
}

// if-else Statement
if (age >= 21) {
    console.log("You can drink legally");
} 
else {
    console.log("You cannot drink legally");
}

// if-else if-else Ladder
if (marks >= 90) {
    console.log("Grade A");
} 
else if (marks >= 75) {
    console.log("Grade B");
} 
else if (marks >= 50) {
    console.log("Grade C");
} 
else {
    console.log("Fail");
}

// Ternary Operator
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Result: ",result)

// switch Statement
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid Day");
}

