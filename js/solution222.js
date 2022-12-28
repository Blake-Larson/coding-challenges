//Count the vowels in a string

//valid string, english characters, capitals possible

// countVowels('aabcde') {a:2, e:1}
// countVowels('pizza') {a:1, i:1}
// countVowels('SnIckerdoodle') {i:i, e:2, o:2}

//returned as a total number
function countVowels(str) {
	let vowels = { a: true, e: true, i: true, o: true, u: true };
	return str
		.toLowerCase()
		.split('')
		.filter(el => vowels[el]).length;
}

console.log(countVowels('aabcde'), 3);
console.log(countVowels('pizza'), 2);
console.log(countVowels('Snickerdoodle'), 5);

//Return as a map of vowels with each count.
// function countVowels(str) {
//   const map = {},
//     vowels = { 'a': true, 'e': true, 'i': true, 'o': true, 'u': true }

//   // split and loop through array of letters
//   let arr = str.toLowerCase().split('')

//   for(let el of arr){
//     // check if letter is a vowel, if so add to map, if not do nothing
//     if(vowels[el]){
//       map[el] = map[el] + 1 || 1
//     }
//   }

//   return map
// }

// console.log(countVowels('aabcde'), { 'a': 2, 'e': 1 })
// console.log(countVowels('pizza'), { 'a': 1, 'i': 1 })
// console.log(countVowels('Snickerdoodle'), { 'i': 1, 'e': 2, 'o': 2 })
