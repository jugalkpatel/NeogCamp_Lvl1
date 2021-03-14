// a. find the number of strings with similar number of charcters.
const input = ["apple", "orange", "mango", "papaya"];
const findSimilarChars = (arr) => {
    let ret = arr.reduce((acc, item) => {
        console.log("acc: ", acc);
        console.log("item length: ", item.length);
        return {...acc, [item.length]: acc[[item.length]] ? acc[[item.length]] += 1 : 1};
    }, {});
    return ret;
}
const findSim = findSimilarChars(input);
console.log("similar chars are: ", {findSim});

// b. return an array with strings which have vowels
const someFunc = input.filter((item) => {
	let flag = false;
	const check = item.split("").forEach((char) => {
		flag = ['a','e','i','o','u'].indexOf(char) !== -1;	
	})
	return flag;
})
console.log("Strings that included vowels are: ",someFunc);

// c. return an array of objects with key as item and value as number of chars in the string
const findNumOfChars = (arr) => {
    let sumOfChars = arr.reduce((acc, item) => {
        return {...acc, [item]: item.length}
    }, {});
    // console.log(sumOfChars);
    return sumOfChars;
}
const findChars = findNumOfChars(input);
console.log(`number of chars in string is: ${JSON.stringify(findChars)}`);
