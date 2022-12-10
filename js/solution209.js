// Given a string of characters, return the character that appears the most often.

// string, always valid string, spaces, always lowercase, always only one max character

// return the character as a string

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// 'hello world', 'l'
// 'pizza', 'z'
// 'hey there', 'e'

function findMax(str) {
	// create a hash map the counts each iteration of a character
	let map = {},
		count = 0,
		maxChar;

	for (let char of str) {
		map[char] = map[char] + 1 || 1;
	}
	// find which character appeared the most often

	for (let el in map) {
		if (map[el] > count) {
			count = map[el];
			maxChar = el;
		}
	}
	//return max character
	return maxChar;
}

console.log(findMax('hello world'), 'l');
console.log(findMax('pizza'), 'z');
console.log(findMax('hey there'), 'e');
