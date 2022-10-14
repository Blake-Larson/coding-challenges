//write a function that takes in a string, 0 to x number of vowels, count the number of vowels, return the number of vowels.

//string, always string, not empty, can have specials but only care vowels, can have caps, can have spaces, y is not a vowel

//return the number of the vowels, as a number

// 'abcde' -> 2
// 'Homer' -> 2
// '1-0a98un&^' -> 2

function countVowels(str) {
	//split into an array, filter out the vowels, provide of a key, an array of vowels,

	let strArr = str.toLowerCase().split('');

	let key = ['a', 'e', 'i', 'o', 'u'];

	return strArr.filter(el => key.includes(el)).length;
}

console.log(countVowels('abcde'), 2);
console.log(countVowels('Homer'), 2);
console.log(countVowels('1-0a98un&^'), 2);
