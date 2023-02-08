// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
// only strings

// returned as an object

// count('aba'), {'a': 2, 'b': 1}
// count('Blake'), {'b': 1, 'l': 1, 'a': 1, 'k': 1, 'e':1}
// count('zzza'), {'a': 1, 'z': 3}

function count(str) {
	// create a hashmap of each character
	const map = {};
	if (!str) {
		return map;
	}
	// if letter is in map, add one to it, else add it to map
	str = str.toLowerCase();

	for (letter of str) {
		map[letter] = map[letter] + 1 || 1;
		//   if(map[letter]){
		//     map[letter] += 1
		//   } else {
		//     map[letter] = 1
		//   }
	}
	return map;
}

console.log(count('aba'), { a: 2, b: 1 });
console.log(count('Blake'), { b: 1, l: 1, a: 1, k: 1, e: 1 });
console.log(count('zzza'), { a: 1, z: 3 });
console.log(count(''), {});
