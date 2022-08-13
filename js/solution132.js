//Reverse all of the words

//P: Take in a string valid,

//R: A string, reversed words

function reverseWords(str) {
	//split the string into words
	let stringArr = str.split(' ');

	//reverse that array
	stringArr.reverse();

	//join the words
	return stringArr.join(' ');
}

//Examples:

reverseWords('hey there'); // => there hey
reverseWords('The greatest victory is that which requires no battle'); //'battle no requires which that is victory greatest The'

//Refactored

function reverseWords(str) {
	return str.split(' ').reverse().join(' ');
}
