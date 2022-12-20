//coutn the vowels in a string, no Y

//with array methods
function vowelCounter(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let arr = str.toLowerCase().split('');
	return arr.filter(el => vowels.includes(el)).length;
}

//with for loop

// function vowelCounter(str) {
//   const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 }
//   let arr = str.toLowerCase().split('')
//   let count = 0

//   for (el of arr) {
//     if (vowels[el]){
//       count++
//     }
//   }
//   return count
// }

console.log(vowelCounter('aabbcedas'), 4);
console.log(vowelCounter('pizza'), 2);
console.log(vowelCounter('Hollyann'), 2);
