// Given a string of characters, return the character that appears the most often.

//always a string, valid, could be spaces, always will be repeating characters, can be caps

//return the character as a string

// findMost('aabcde'), a
// findMost('Audreyy'), y
// findMost('PiZza'), z

function findMost(str) {
	let charMap = {},
		count = 0,
		maxChar = null;

	for (const char of str) {
		charMap[char] = charMap[char] + 1 || 1;
	}

	for (const char in charMap) {
		if (charMap[char] > count) {
			count = charMap[char];
			maxChar = char;
		}
	}
	return maxChar;
}
// function findMost(str) {
// 	//count how many times each character appears by using a hashmap
// 	const map = {};
// 	let strArr = str.toLowerCase().split('');

// 	for (el of strArr) {
// 		if (map[el]) {
// 			map[el] += 1;
// 		} else map[el] = 1;
// 	}

// 	let num = 0;
// 	let letter = '';
// 	for (el in map) {
// 		if (map[el] > num) {
// 			num = map[el];
// 			letter = el;
// 		}
// 	}
// 	return letter;
// }

console.log(findMost('aabcde'), 'a');
console.log(findMost('Audreyy'), 'y');
console.log(findMost('PiZza'), 'z');
