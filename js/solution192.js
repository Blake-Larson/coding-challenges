// Given an array of integers, find the one that appears an off number of times.

//there will aways be only one integer that appears an off number of times.
//always numbers, not empty, no negatives, integers

// return as number

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
	// use a hash map to count each numbers iterations
	const count = {};

	arr.forEach(el => {
		if (count[el]) {
			count[el] += 1;
		} else {
			count[el] = 1;
		}
	});
	//see which number has an odd count and return

	for (el in count) {
		if (count[el] % 2 !== 0) {
			return Number(el);
		}
	}
}

console.log(findOdd([7]), 7);
console.log(findOdd([0]), 0);
console.log(findOdd([1, 1, 2]), 2);
console.log(findOdd([0, 1, 0, 1, 0]), 0);
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);
