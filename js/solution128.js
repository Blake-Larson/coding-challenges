//Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

//P: array of numbers

//Return array of numbers

function duplicate(array) {
	array.push(...array);
	return array;
}

//example
duplicate([1, 2, 3, 4, 5]); //[1,2,3,4,5,1,2,3,4,5]
