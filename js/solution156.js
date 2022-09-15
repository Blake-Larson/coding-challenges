//Remove the smallest item from an array, do not muate original list

//P: array of numbers with a valid smallest number

//R: array without the smallest number, if there are two remove the one with the lowest index.

function removeSmallest(numbers) {
	//make copy
	let arr = [...numbers];

	//use findIndex to find the index of the smallest first number

	let smallest = arr.findIndex(el => Math.min(...arr) === el);
	//remove that number
	arr.splice(smallest, 1);
	return arr;
}
