// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
	if (!str) return null;
	if (str.length % 2 === 0) {
		return (strArr = str.match(/.{1,2}/g));
	} else {
		let arr = str.match(/.{1,2}/g);
		arr[arr.length - 1] = `${arr[arr.length - 1]}_`;
		return arr;
	}
}

console.log(solution('abc'), ['ab', 'c_']);
console.log(solution('abcdef'), ['ab', 'cd', 'ef']);
