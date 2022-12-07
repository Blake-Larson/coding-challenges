// Given a string s, find the length of the longest substring without repeating characters.

// always a string, always valid, no space or specials

// return length as a number

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s) {
	if (s.length < 2) return s.length;

	arr = s.split('');
	let substring = {};
	let count = [];

	for (el of arr) {
		if (substring[el]) {
			count.push(Object.keys(substring).length);
			substring = {};
			substring[el] = true;
		} else {
			substring[el] = true;
		}
	}
	return count ? Math.max(...count) : s.length;
}

// function lengthOfLongestSubstring(s){
//   // split s into array
//   arr = s.split('')

//   // create a hashmap to store the current substring
//   let substring = {}
//   let count  = []

//   //loop through array, if not in hashmap create new property, else return the number of items in the object and reset the object
//   for (el of arr){
//     console.log(substring, count)
//     if(substring[el]){
//       count.push(Object.keys(substring).length)
//       substring = {}
//       substring[el] = true
//     } else {
//       substring[el] = true
//     }
//   }

//   //return the longest result
//   return Math.max(...count)

// }

console.log(lengthOfLongestSubstring('abcabcbb'), 3);
console.log(lengthOfLongestSubstring('bbbbb'), 1);
console.log(lengthOfLongestSubstring('pwwkew'), 3);
