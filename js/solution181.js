//Count Occurrences of each Element in Array

//given an array, not empty, strings or numbers

//return as an object with the counts

// [1,1,1,2,2,3,3,4] -> {1: 3, 2:2, 3:2, 4: 1}
// [a,a,a,b,c,d,d,e] -> {a: 3, b:1, c:1, d: 2, e: 1}

function count(arr) {
	//for of loop to create key value pairs in an object
	const itemCount = {};

	for (const el of arr) {
		if (itemCount[el]) {
			itemCount[el] += 1;
		} else {
			itemCount[el] = 1;
		}
	}
	return itemCount;
}

console.log(count([1, 1, 1, 2, 2, 3, 3, 4]), { 1: 3, 2: 2, 3: 2, 4: 1 });
console.log(count(['a', 'a', 'a', 'b', 'c', 'd', 'd', 'e']), {
	a: 3,
	b: 1,
	c: 1,
	d: 2,
	e: 1,
});
