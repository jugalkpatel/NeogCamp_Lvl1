/* Write a function which takes a msg and time.
The function should print that msg every X interval
*/

// function printMsg(msg, time) {
// 	setInterval(() => {
// 		console.log(msg)
// 	}, time);
// }
// printMsg("jugal", 3000);

function printbangBang(number) {
	let time = number;
	const timer = setInterval(() => {
		console.log(time -= 1);
	}, 1000);
	setTimeout(() => {
		clearInterval(timer);
		console.log("bang bang");
	}, time * 1000)
	console.log(number); // this is optional so that it look like that counting start from 7;
}
printbangBang(7);