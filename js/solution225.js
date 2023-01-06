//Given an array of integers, return the number that occurs an odd number of times.

function findOdd(arr) {
	const count = {};
	for (num of arr) {
		count[num] = count[num] + 1 || 1;
	}
	for (el in count) {
		if (count[el] % 2 !== 0) {
			return el;
		}
	}
}

console.log(findOdd([1, 2, 2, 3, 3]), 1);
console.log(findOdd([1, 5, 3, 1, 3]), 5);
console.log(findOdd([1, 1, 6, 6, 3]), 3);
