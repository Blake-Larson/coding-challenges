// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

//always string, no caps, no numbers or other data types, always valid

// return a string

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// function removeDuplicates(str){
//   // if the current el !== next el in array, keep it

//   return str.split(' ').filter((el, i, arr) => el !== arr[i+1]).join(' ')

// }

const removeDuplicates = str =>
	str
		.split(' ')
		.filter((el, i, arr) => el !== arr[i + 1])
		.join(' ');

console.log(
	removeDuplicates(
		'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
	),
	'alpha beta gamma delta alpha beta gamma delta'
);
console.log(
	removeDuplicates(
		'alpha alpha beta gamma gamma delta delta delta alpha gamma delta'
	),
	'alpha beta gamma delta alpha gamma delta'
);
