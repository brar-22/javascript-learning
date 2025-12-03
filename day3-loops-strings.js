// Day 3 - Loops & Strings 

// ------------------------------
// 1) for loop
// ------------------------------
for (let i = 1; i <= 5; i++) {
    console.log("apna college", i);
}

// ------------------------------
// 2) while loop
// ------------------------------
let j = 1;
while (j <= 3) {
    console.log("while loop count:", j);
    j++;
}

// ------------------------------
// 3) do...while loop
// ------------------------------
let k = 1;
do {
    console.log("do..while count:", k);
    k++;
} while (k <= 3);

// ------------------------------
// 4) for..of loop (string)
// ------------------------------
let str = "Apna";
for (let ch of str) {
    console.log("for..of char:", ch);
}

// ------------------------------
// 5) for..in loop (object)
// ------------------------------
let student = {
    name: "Amit",
    age: 20,
    grade: "A"
};

for (let key in student) {
    console.log("for..in", key, "=", student[key]);
}

// ------------------------------
// Practice Q1: Print even numbers 0–100
// ------------------------------
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log("Even:", num);
    }
}

// ------------------------------
// Practice Q2: Guessing Game (console prompt)
// NOTE: Works ONLY in browser console because of prompt()
// ------------------------------
let gameNum = 19;  // you can change this

let userGuess = prompt("Guess the number:");

while (userGuess != gameNum) {
    console.log("Wrong guess. Try again.");
    userGuess = prompt("Guess the number:");
}

console.log("Congratulations! You guessed it right:", gameNum);

// ------------------------------
// Strings in JS
// ------------------------------
let college = "Apna College";

console.log("String:", college);
console.log("Length:", college.length);
console.log("First char:", college[0]);

// ------------------------------
// Template Literals
// ------------------------------
let name = "Shradha";
let greeting = `Hello ${name}, welcome to JavaScript!`;
console.log(greeting);

// ------------------------------
// String Methods
// ------------------------------
console.log("Uppercase:", college.toUpperCase());
console.log("Lowercase:", college.toLowerCase());
console.log("Trim:", "   hello   ".trim());
console.log("Concat:", "Java".concat("Script"));
console.log("Replace:", "hello world".replace("world", "JS"));
console.log("Slice:", "ApnaCollege".slice(0, 4));

// ------------------------------
// Practice Q3: Username Generator
// ------------------------------
let fullName = prompt("Enter your full name:");
let userName = "@" + fullName + fullName.length;

console.log("Generated Username:", userName);
