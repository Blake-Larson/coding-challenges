// DESCRIPTION:
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2) {
	//check for valid arrays
	if (array1 && array2) {
		//sort both arrays.
		array1 = array1.sort((a, b) => a - b);
		array2 = array2.sort((a, b) => a - b);

		//square the first array
		let squaredArray1 = array1.map(el => Math.pow(el, 2));

		//check if equal to 2nd array by spreading
		for (let i = 0; i < squaredArray1.length; i++) {
			if (squaredArray1[i] != array2[i]) return false;
		}
		return true;
	}
	return false;
}

// Examples

comp(
	[121, 144, 19, 161, 19, 144, 19, 11],
	[121, 14641, 20736, 361, 25921, 361, 20736, 361]
); //true

comp(
	[121, 144, 19, 161, 19, 144, 19, 11],
	[132, 14641, 20736, 361, 25921, 361, 20736, 361]
); //false
comp(
	[121, 144, 19, 161, 19, 144, 19, 11],
	[121, 14641, 20736, 36100, 25921, 361, 20736, 361]
); //false
