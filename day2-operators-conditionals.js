// Day 2 - Comments, Operators & Conditional Statements
// What I learned today 

// --------------------------------------------------
// 1) Comments in JS
// --------------------------------------------------

// Single-line comment

/* 
Multi-line comment
This is not executed by JavaScript
*/

// --------------------------------------------------
// 2) Arithmetic Operators (+, -, *, /, %, **)
// --------------------------------------------------

let a = 10;
let b = 3;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);   // modulus
console.log("a ** b =", a ** b); // exponentiation

// Increment / Decrement
let x = 5;
x++;  // x = x + 1
console.log("x after increment:", x);

x--;  // x = x - 1
console.log("x after decrement:", x);

// --------------------------------------------------
// 3) Assignment Operators (=, +=, -=, *=, %=, **=)
// --------------------------------------------------

let n = 10;
n += 5;  // n = n + 5
console.log("n after +=:", n);

// --------------------------------------------------
// 4) Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
// --------------------------------------------------

console.log("5 == '5' :", 5 == "5");   // true
console.log("5 === '5' :", 5 === "5"); // false (type checked)
console.log("10 > 5 :", 10 > 5);
console.log("5 <= 5 :", 5 <= 5);

// --------------------------------------------------
// 5) Logical Operators (&&, ||, !)
// --------------------------------------------------

let age = 20;

console.log("age > 18 && age < 60:", age > 18 && age < 60);
console.log("age < 18 || age > 60:", age < 18 || age > 60);
console.log("!(age > 18):", !(age > 18));

// --------------------------------------------------
// 6) Conditional Statements (if, else, else-if)
// --------------------------------------------------

let marks = 75;

if (marks > 90) {
    console.log("Excellent");
} else if (marks > 60) {
    console.log("Good");
} else {
    console.log("Needs Improvement");
}

// --------------------------------------------------
// 7) Ternary Operator
// --------------------------------------------------

let number = 10;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log("Ternary check:", result);

// --------------------------------------------------
// PRACTICE QUESTIONS
// --------------------------------------------------

// Q1: Check if number is multiple of 5
// Input using prompt (works only in browser)

let userNum = prompt("Enter a number:");
if (userNum % 5 === 0) {
    console.log(userNum, "is a multiple of 5");
} else {
    console.log(userNum, "is NOT a multiple of 5");
}

// Q2: Grade based on score
let score = prompt("Enter your exam score:");

if (score >= 80 && score <= 100) {
    console.log("Grade: A");
} else if (score >= 70) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else if (score >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
