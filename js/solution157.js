//return the two largest ages

//P: given array always valid

//R: an array of the two oldest ages

function twoOldestAges(ages) {
	let sorted = ages.sort((a, b) => a - b);

	return [sorted[sorted.length - 2], sorted[sorted.length - 1]];
}
