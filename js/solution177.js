// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

//array, never empty, always numbers, whole numbers,
//length of return array, which dictates how many even numbers we want

//numbers in an array in the same order

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// function getEvens(arr, numOfEvens) {
//   //filter even numbers
//   let filteredArr = arr.filter(el => el % 2 === 0)

//   //take numOfEvens off the end of that array using slice
//   //[2,4,6,8]
//   return filteredArr.slice(filteredArr.length - numOfEvens)
// }

const getEvens = (arr, numOfEvens) => {
	let filteredArr = arr.filter(el => el % 2 === 0);
	return filteredArr.slice(filteredArr.length - numOfEvens);
};

console.log(getEvens([1, 2, 3, 4, 5], 2), [2, 4]);
console.log(getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(getEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
console.log(getEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
