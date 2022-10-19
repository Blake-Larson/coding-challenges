// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// never empty, always numbers, no strings, always integers, always positive

// return a single number that represents the average. rounded down

// function getAverage(arr) {
//   // reduce to get the sum of the array items / arr.length
//   // Math.floor() to round down to the nearst integer
//   return Math.floor(arr.reduce((a, c) => a + c, 0) / arr.length)
// }

const getAverage = arr =>
	Math.floor(arr.reduce((a, c) => a + c, 0) / arr.length);

console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
