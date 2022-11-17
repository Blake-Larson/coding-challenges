// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

//always an array, always strings, no capitals, each item will just be one word

//returned as an array

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1

function averageLength(arr) {
	//find the average length of each string

	let sum = arr.reduce((a, c) => a + c.length, 0);
	let average = Math.round(sum / arr.length);

	// map through the array and replace each value with new length of string
	return arr.map(el => el[0].repeat(average));
}

const averageLength = arr =>
	arr.map(el =>
		el[0].repeat(Math.round(arr.reduce((a, c) => a + c.length, 0) / arr.length))
	);

console.log(averageLength(['u', 'y']), ['u', 'y']);
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc']);
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), [
	'aaa',
	'bbb',
	'ddd',
	'eee',
]);
