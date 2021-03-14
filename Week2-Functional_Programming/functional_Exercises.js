// when functions are treated as any other variables it is called first class functions.
// in other words we can pass function as argument,
// store it into variable
// return function from another function
// can be added to objects and arrays.

// 1
// Take an Object with your mother's name and your age.
// Now, create an obj for your sibling by age difference
// function createSiblingObj(obj) {
//     return {...obj, name: "jugal", age: obj.age - 10}
// }
const createSiblingObj = (obj) => ({...obj, name: "jugal", age: obj.age - 10});
const myObj = {
    name: "Reeta Patel",
    age: 21
};
const sibling = createSiblingObj(myObj);
console.log({...sibling});
console.log({...myObj});

// 2
// Take an array with 5 colors. create another array by adding two more colors to it.
let colors = ['red', 'white', 'black', 'blue', 'green'];
// function colorAdded(arr) {
//     return [...arr, 'yellow', 'purple'];
// }
const colorAdded = (arr, colorFirst, colorSecond) => [...arr, colorFirst, colorSecond];
const addedCols = colorAdded(colors, "Yellow", "Purple");
console.log(addedCols);
console.log(colors);

// 3
// Write function birthday() to take a person's name and age in an object and increase age.
// function birthday(personInfo) {
//     return {...personInfo, age: personInfo.age + 1};
// } 
// const birthday = (personInfo) => {
//     return {...personInfo, age: personInfo + 1};
// }
const birthday = (personInfo) => ({...personInfo, age: personInfo.age + 1});
let personObj = {
    name: "Jimmy",
    age: 20
}
const getInfo = birthday(personObj);
console.log(`Before Birthday: ${personObj.name} ${personObj.age}`);
console.log(`After Birthday: ${getInfo.name} ${getInfo.age}`);

// 4
// Write a function which can tell a number is less than 10 or not. 
// supply this function to Array.filter to get an array with no 10s in it.

const isLesserThanTen = (number) => number < 10;
const numbers = [5, 7, 2, 10, 67, 99];
const notTens = numbers.filter(isLesserThanTen);
console.log(`array without greater than 10: ${notTens}`);


// Write your own version of reduce.
const sum = (number, accumulator) => number + accumulator;
const myReduce = (callback, arr, accumulator = 0) => {
    let localAcc = accumulator;
    for (let element of arr) {
        localAcc = callback(element, localAcc);
    }
    return localAcc;
}
const exArray = [10, 20, 30, 40, 50];
const findSum = myReduce(sum, exArray, 0);
console.log(`Sum from my own reduce: ${findSum}`);


// find sum of all odd numbers
const findOddSum = (arr) => {
    const sum = arr.reduce((acc, num) => {
        return num % 2 !== 0 ? acc += num : acc;
    }, 0)
    return sum;
}
const odds = [1, 3, 2, 5, 7, 9, 10, 8];
const odd = findOddSum(odds);
console.log(`Sum of odd elements: ${odd}`);   

// find sum of all numbers of odd indices
const findOddSumIndices = (arr, startIndex) => {
    const sum = arr.reduce((acc, num, index) => {
        // console.log("index", index);
        // console.log("acc: ", acc);
        return index % 2 !== 0 ? acc += num : acc;
    }, startIndex);
    return sum;
}
const elements = [1, 3, 2, 5, 7, 9, 10, 8, 20, 40];
const sumIndices = findOddSumIndices(elements ,0);
console.log(`Sum of odd indices: ${sumIndices}`);

// find biggest number in that array
const findMax = (arr) => {
    const max = arr.reduce((acc, num) => num >= acc ? acc = num : acc, -1);
    return max;
}

const maximum = findMax(elements);
console.log(`Maximum is: ${maximum}`);

// find numbers divisble by ten
const divisibleByTen = (arr) => {
    const ret = arr.filter((num) => num % 10 === 0);
    return ret;
}
const diviTen = divisibleByTen(elements);
console.log(`Numbers divisible by Ten are: ${diviTen}`);

// return array of numbers where odd numbers are incremented by one and even numbers are decremented by one.
const incDec = elements.map((num) => num % 2 === 0 ? num -= 1 : num += 1);
console.log(`increment and decrement based on odd and even: ${incDec}`);

// return object with sum of all odd numbers and even numbers seperately.
const initalObject = {
    oddCount: 0,
    evenCount: 0
}
const findOddEvenCount = (arr) => {
    
    let ret = arr.reduce((acc, num) => {
        console.log(acc);
        return num % 2 === 0 ?  { ...acc, evenCount: acc.evenCount + num} : {...acc, oddCount: acc.oddCount + num};
    }, {oddCount: 0, evenCount: 0}); 
    return ret;
}
const oddEven = findOddEvenCount(elements);
console.log(`Odd Count is: ${oddEven.oddCount}, Even Count is: ${oddEven.evenCount}`);
