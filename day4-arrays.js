// Day 4 - Arrays in JS 

// --------------------------------------------------
// 1) Creating Arrays
// --------------------------------------------------
{
    let heroes = ["ironman", "hulk", "thor", "batman"];
    console.log("Heroes:", heroes);

    let marks = [96, 75, 48, 83, 66];
    console.log("Marks:", marks);

    let info = ["rahul", 86, "Delhi"];
    console.log("Info:", info);
}

// --------------------------------------------------
// 2) Array Indices
// --------------------------------------------------
{
    let arr = ["a", "b", "c", "d"];
    console.log(arr[0], arr[1], arr[2], arr[3]);
}

// --------------------------------------------------
// 3) Looping Over an Array
// --------------------------------------------------
{
    let fruits = ["apple", "banana", "mango", "orange"];

    for (let i = 0; i < fruits.length; i++) {
        console.log("Fruit:", fruits[i]);
    }
}

// --------------------------------------------------
// Practice Q1:
// Find average marks of the class
// marks = [85, 97, 44, 37, 76, 60]
// --------------------------------------------------
{
    let marks = [85, 97, 44, 37, 76, 60];

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let avg = sum / marks.length;
    console.log("Average marks =", avg);
}

// --------------------------------------------------
// Practice Q2:
// Apply 10% OFF on each price
// prices = [250, 645, 300, 900, 50]
// --------------------------------------------------
{
    let prices = [250, 645, 300, 900, 50];

    for (let i = 0; i < prices.length; i++) {
        let offer = prices[i] * 0.10;
        prices[i] = prices[i] - offer;  // update price
    }

    console.log("Prices after 10% OFF:", prices);
}

// --------------------------------------------------
// 4) Array Methods
// push, pop, toString
// --------------------------------------------------
{
    let nums = [1, 2, 3];

    nums.push(4);
    console.log("After push:", nums);

    nums.pop();
    console.log("After pop:", nums);

    console.log("toString:", nums.toString());
}

// --------------------------------------------------
// 5) concat, unshift, shift
// --------------------------------------------------
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    let combined = arr1.concat(arr2);
    console.log("Concat:", combined);

    combined.unshift(0);
    console.log("After unshift:", combined);

    combined.shift();
    console.log("After shift:", combined);
}

// --------------------------------------------------
// 6) slice & splice
// --------------------------------------------------
{
    let letters = ["a", "b", "c", "d", "e"];

    let sliced = letters.slice(1, 4); // b,c,d
    console.log("Slice:", sliced);

    // splice(startIndex, deleteCount, new elements...)
    letters.splice(2, 1, "X");
    console.log("Splice:", letters);
}

// --------------------------------------------------
// Practice Q3:
// Companies array
// --------------------------------------------------
{
    let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

    // a) Remove first company
    companies.shift();
    console.log("After removing first:", companies);

    // b) Remove Uber & add Ola
    companies.splice(1, 1, "Ola");
    console.log("After replacing Uber:", companies);

    // c) Add Amazon at the end
    companies.push("Amazon");
    console.log("Final companies:", companies);
}
