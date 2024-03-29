// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//array, at least 3, only positive

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
	//filter integers and check if length is greater than 1
	//if so, find the opposite and return
	let check = integers.filter(el => el % 2 === 0);

	if (check.length > 1) {
		return integers.find(el => el % 2 !== 0);
	} else {
		return check[0];
	}
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11);
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160);
