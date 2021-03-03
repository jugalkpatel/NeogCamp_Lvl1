// curring
const takeUserName = (userName) => (greeting) => `${greeting} ${userName} how are you?`;
const curryTest = takeUserName("jugal")("hello");
console.log(curryTest);

// composition
const printUserName = (userName) => `My UserName is: ${userName}`;
const printUserId = (uid) => `My Uid is: ${uid}`;
const compositionTest = (userid, userName) => `Information: ${printUserName(userName)} ${printUserId(userid)}`;
console.log(compositionTest("jugal", "42"));

// The one Homework:
// write a function compose() which can take any number of functions
// and return a function which will run the given functions in order when
// called with an argument
const compose = (...functions) => {
    // console.log(functions);
    const someFunc = (value) => {
        return functions.reduce((acc, func) => {
            return func(acc);
        }, value);
    }
    return someFunc;
}
const increment = num => num + 1;
const square = num => num * num;
const call = compose(increment, square);
console.log(call(2));