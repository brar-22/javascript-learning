// Day 5 - Functions & Array Methods (Console Only)

// --------------------------------------------------
// 1) Basic Function (no parameters)
// --------------------------------------------------
{
    function greet() {
        console.log("Hello from a function!");
    }

    greet();
}

// --------------------------------------------------
// 2) Function with parameters
// --------------------------------------------------
{
    function sum(a, b) {
        console.log("Sum =", a + b);
    }

    sum(5, 10);
}

// --------------------------------------------------
// 3) Arrow Function
// --------------------------------------------------
{
    const multiply = (a, b) => {
        return a * b;
    };

    console.log("Multiply =", multiply(4, 3));
}

// --------------------------------------------------
// Practice Q1:
// Function that returns number of vowels (function keyword)
// --------------------------------------------------
{
    function countVowels(str) {
        let count = 0;
        let vowels = "aeiouAEIOU";

        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                count++;
            }
        }

        console.log("Vowels (function):", count);
        return count;
    }

    countVowels("ApnaCollege");
}

// --------------------------------------------------
// Practice Q2:
// Same using Arrow Function
// --------------------------------------------------
{
    const countVowelsArrow = (str) => {
        let count = 0;
        let vowels = "aeiouAEIOU";

        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                count++;
            }
        }

        console.log("Vowels (arrow):", count);
        return count;
    };

    countVowelsArrow("JavaScript");
}

// --------------------------------------------------
// 4) forEach loop
// --------------------------------------------------
{
    let nums = [1, 2, 3, 4, 5];

    nums.forEach((val) => {
        console.log("Value:", val);
    });
}

// --------------------------------------------------
// Practice Q3:
// Square each value using forEach
// --------------------------------------------------
{
    let numbers = [2, 4, 6, 8];

    numbers.forEach((num) => {
        console.log("Square:", num * num); //n**2
    });
}

// --------------------------------------------------
// 5) Array.map()
// Creates a new array
// --------------------------------------------------
{
    let arr = [1, 2, 3, 4];

    let doubled = arr.map((val) => {
        return val * 2;
    });

    console.log("Doubled array:", doubled);
}

// --------------------------------------------------
// 6) Array.filter()
// --------------------------------------------------
{
    let nums = [10, 23, 45, 66, 90, 100];

    let evens = nums.filter((val) => {
        return val % 2 === 0;
    });

    console.log("Even numbers:", evens);
}

// --------------------------------------------------
// 7) Array.reduce()
// --------------------------------------------------
{
    let numbers = [1, 2, 3, 4];

    let total = numbers.reduce((acc, val) => {
        return acc + val;
    });

    console.log("Sum using reduce:", total);
}

// --------------------------------------------------
// Practice Q4:
// Filter marks that are 90+
// --------------------------------------------------
{
    let marks = [86, 92, 75, 99, 91, 88];

    let toppers = marks.filter((m) => {
        return m >= 90;
    });

    console.log("Marks 90+:", toppers);
}

// --------------------------------------------------
// Practice Q5:
// Use reduce to find product of all numbers
// --------------------------------------------------
{
    let nums = [2, 3, 4];

    let product = nums.reduce((acc, val) => {
        return acc * val;
    });

    console.log("Product (reduce):", product);
}

// --------------------------------------------------
// Practice Q6:
// User enters number n → create array 1..n → sum using reduce
// --------------------------------------------------
{
    let n = prompt("Enter a number:");
    n = Number(n);

    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    let sum = arr.reduce((acc, val) => {
        return acc + val;
    });

    console.log("Array:", arr);
    console.log("Sum from 1 to", n, "=", sum);
}
