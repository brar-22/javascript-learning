// Day 1 - JavaScript Basics
// What I learned today

// 1) Printing to the console
console.log("Apna College");
console.log("This is my first JavaScript code!");

// 2) Variables in JavaScript
// Variables are containers for data

let radius = 14;       // can be updated
const pi = 3.14;       // cannot be updated
var oldMethod = "var keyword"; // can be re-declared (not recommended)

console.log("Radius:", radius);
console.log("Pi:", pi);
console.log("Var example:", oldMethod);

// 3) Variable naming rules examples
let userName = "Amit";   // letters allowed
let user_name = "Alex";  // underscore allowed
let $value = 100;        // $ allowed

// let 9name = "wrong";   // ❌ starts with number → invalid
// let user name = "no";  // ❌ spaces not allowed
// let let = 20;          // ❌ reserved word → invalid

// 4) Data Types in JS
let myNumber = 50;             // Number
let myString = "Hello JS";     // String
let myBoolean = true;          // Boolean
let myUndefined;               // Undefined
let myNull = null;             // Null
let myBigInt = 12345678901234567890n; // BigInt
let mySymbol = Symbol("id");   // Symbol

console.log("Number:", myNumber);
console.log("String:", myString);
console.log("Boolean:", myBoolean);
console.log("Undefined:", myUndefined);
console.log("Null:", myNull);
console.log("BigInt:", myBigInt);
console.log("Symbol:", mySymbol);

// 5) Practice Questions

// Q1: Create a const object called "product"
const product = {
    productName: "Ball Pen",
    price: 270,
    rating: 4,
    offer: 5
};

console.log("Product:", product);

// Q2: Create a const object called "profile"
const profile = {
    userName: "developer123",
    isFollow: true,
    followers: 123,
    following: 45
};

console.log("Profile:", profile);
