// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers. Always nums, not empty, always 3, can be negative but all whole numbers

//return the index as a number

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// function gimme(arr){
//   let result
//   // find middle by checking if not equal to the lowest and the highest
//   arr.forEach((el, i) => {
//     if(el !== Math.min(...arr) && el !== Math.max(...arr)){
//       result = i
//     }
//   })
//   return result
// }

// const gimme = arr => arr.indexOf(arr.find((el,i) => el !== Math.min(...arr) && el !== Math.max(...arr)))

function gimme(arr) {
	return arr.indexOf([...arr].sort((a, b) => a - b)[1]);
}

console.log(gimme([2, 3, 1]), 0);
console.log(gimme([5, 10, 14]), 1);
console.log(gimme([7, 3, 5]), 2);
