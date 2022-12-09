// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

const magazine =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

function ransom(magazine, str) {
	let magArr = magazine.split(' ');
	let strArr = str.split(' ');
	let result;
	const magazineMap = {};
	const strMap = {};

	for (word of magArr) {
		magazineMap[word] = magazineMap[word] + 1 || 1;
	}

	for (word of strArr) {
		strMap[word] = strMap[word] + 1 || 1;
	}

	for (word in strMap) {
		if (magazineMap[word] && magazineMap[word] >= strMap[word]) {
			result = true;
		} else {
			result = false;
		}
	}
	return result;
}

console.log(ransom(magazine, 'sit ad est sint'), true);
console.log(ransom(magazine, 'sit ad est love'), false);
console.log(ransom(magazine, 'sit ad est sint in in'), true);
console.log(ransom(magazine, 'sit ad est sint in in in in'), false);
