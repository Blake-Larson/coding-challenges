//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//always integers, never empty, no specials, always in an array,

// return a single number that represents the sum

// function sumMix(arr){
//   // map to turn each item into a number using Number()
//   // reduce the array to get the sum
//   return arr.map(el => Number(el)).reduce((sum, c) => sum + c , 0)
// }

const sumMix = arr => arr.reduce((sum, c) => sum + Number(c), 0);

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);
