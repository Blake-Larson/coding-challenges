//Find the index of the middle number from an array of 3 numbers

function findIndex(arr) {
	return arr.indexOf([...arr].sort((a, b) => a - b)[1]);
}

console.log(findIndex([1, 2, 3]), 1);
console.log(findIndex([1, 5, 3]), 2);
console.log(findIndex([7, 2, 5]), 2);
