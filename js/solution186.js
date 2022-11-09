// An ordered sequence of numbers from 1 to N is given. One number might have been deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// alwys an array of numbers, Note: N may be 1 or less (in the latter case, the first array will be []).

//return the number that was deleted

// function findDeletedNumber(arr, alteredArr) {
// 	// sort the alteredArr
// 	alteredArr.sort((a, b) => a - b);

// 	//forEach to compare
// 	return arr.find((el, i) => el !== alteredArr[i])
// 		? arr.find((el, i) => el !== alteredArr[i])
// 		: 0;
// }

// console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, 'Deletion');
// console.log(
// 	findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]),
// 	5,
// 	'Deletion'
// );
// console.log(
// 	findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
// 	0,
// 	'No deletion'
// );
function findDeletedNumber(arr, mixedArr) {
	if (arr.length === mixedArr.length) {
		return 0;
	} else {
		let arrSum = arr.reduce((acc, c) => acc + c, 0);
		let mixedArrSum = mixedArr.reduce((acc, c) => acc + c, 0);
		return arrSum - mixedArrSum;
	}
}
