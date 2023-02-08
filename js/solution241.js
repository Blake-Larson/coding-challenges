// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//with Sets

// function distinct(arr){
//   return Array.from(new Set(arr))
// }

//without Sets

function distinct(arr) {
	return arr.filter((num, i) => i === arr.lastIndexOf(num));
}

console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);
