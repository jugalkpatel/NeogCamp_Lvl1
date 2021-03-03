// 2
const getLength = (text) => text.length;
const strLength = (text, callback) => `OMG! my name is ${callback(text)} char long!`;
const testLengthFunc = strLength("jugal", getLength);
console.log(testLengthFunc);

// 3
const willThanosKillMe = (text, killed, notKilled) => {
    if (text.length % 2 !== 0) {
        return killed(text);
    }
    return notKilled(text);
}

const killed = () => `Give my bose speakers and headphones to my sister`;
const notKilled = () => `Yay! I am alive!`;
const textThanos = willThanosKillMe("jugal", killed, notKilled);
console.log(textThanos);

// ex4
const printAfter = (delay, message) => {
    setTimeout(() => {
        console.log(message);
    }, delay * 1000)
}
const testPrintAfter = printAfter(3, "Hello, I am bit slow");

// ex5
// Predict Outputs:
// 1. A, B, C
// 2. B, A, C
// 3. A, C, B