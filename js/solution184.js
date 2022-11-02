//Given a string of words (x), you need to return an array of the words, sorted alphbetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid. seperated by spaces, no caps

//return an array

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to']

// function last(str) {
//   //split using space as a delimiter
//   let arr = str.split(' ')

//   //reverse each word
//   arr = arr.map(el => el.split('').reverse().join(''))

//   //sort
//   arr = arr.sort()

//   //undo the reverse
//   arr = arr.map(el => el.split('').reverse().join(''))

//   //return the array
//   return arr

// }
function last(x) {
	let arr = x.split(' ');
	return arr.sort(
		(a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
	);
}

console.log(last('man i need a taxi up to ubud'), [
	'a',
	'need',
	'ubud',
	'i',
	'taxi',
	'man',
	'to',
	'up',
]);
console.log(last('what time are we climbing up the volcano'), [
	'time',
	'are',
	'we',
	'the',
	'climbing',
	'volcano',
	'up',
	'what',
]);
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);
