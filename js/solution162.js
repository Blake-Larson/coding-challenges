//P: an array with 3 numbers

//R: the index of the middle number

function gimme(triplet) {
	copy = [...triplet];
	return triplet.indexOf(copy.sort((a, b) => a - b)[1]);
}

gimme([2, 3, 1]); // => 0
gimme([5, 10, 14]); // => 1
