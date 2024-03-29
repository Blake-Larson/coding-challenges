// Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

// initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

// sort(initialArray, sortingArray) => ['z', 'x', 'y']

//P: always arrays

//R: an array in the correct order

sort(['z', 'x', 'y'], [0, 2, 1]); // ['z', 'y', 'x']
sort(['z', 'x', 'y'], [1, 2, 0]); // ['y', 'z', 'x']
sort(['z', 'x', 'y'], [1, 0, 2]); // ['x', 'z', 'y']

function sort(initialArray, sortingArray) {
	return initialArray.map((_, idx) => initialArray[sortingArray.indexOf(idx)]);
}
