// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// given a string, no caps, always string

// What if the string is empty? Then the result should be empty object literal, {}.

// return a hashmap or an object of numbers

function countCharacters(str) {
	let map = {};
	if (!str) return map;

	let arr = str.split('');

	for (el of arr) {
		if (map[el]) {
			map[el] += 1;
		} else {
			map[el] = 1;
		}
	}
	return map;
}

console.log(countCharacters('aba'), { a: 2, b: 1 });
console.log(countCharacters(''), {});
console.log(countCharacters('pizza'), { p: 1, i: 1, z: 2, a: 1 });
console.log(countCharacters('bbbcccd'), { b: 3, c: 3, d: 1 });
