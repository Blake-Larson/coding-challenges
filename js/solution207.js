// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method

//strings, always valid

//return as string

// reverse('hi there'), 'ereht ih'
// reverse('Pizza'), 'azziP'
// reverse('Hannah'), 'hannaH'

function reverse(str) {
	let arr = str.split('');
	let reversed = [];

	for (let i = arr.length; i >= 0; i--) {
		reversed.push(arr[i]);
	}
	return reversed.join('');
}

console.log(reverse('hi there'), 'ereht ih');
console.log(reverse('Pizza'), 'azziP');
console.log(reverse('Hannah'), 'hannaH');
