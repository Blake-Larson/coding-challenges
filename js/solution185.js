//given a string, find the length of the longest substring without repeating characters. Substring cannot have any repeated characters

//always string, always valid, always letters, no caps

//return as a number that represents the length

// "abcabcbb" => "abc" 3
// "bbbbb" => "b" 1
// "pwwkew" => "wke" 3

// function lengthOfLongestSubstring(str) {

//   let stringCounter = []

//   let count = []

//   // push each letter to an array
//   arr = str.split('')

//   arr.forEach(el => {
//       // if arr includes letter, get length and push into count arr
//     if(stringCounter.includes(el)){
//       count.push(stringCounter.length)
//       //clear the stringCounter
//       stringCounter = []
//     }
//     stringCounter.push(el)
//   })
//   return Math.max(...count)
// }
function lengthOfLongestSubstring(str) {
	let stringCounter = [];
	let count = [];

	arr = str.split('');

	arr.forEach(el => {
		if (stringCounter.includes(el)) {
			count.push(stringCounter.length);
			stringCounter = [];
		}
		stringCounter.push(el);
	});
	return Math.max(...count);
}

console.log(lengthOfLongestSubstring('abcabcbb'), 3);
console.log(lengthOfLongestSubstring('bbbbb'), 1);
console.log(lengthOfLongestSubstring('pwwkew'), 3);
