// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

const arr = [1, 2, 3, 4, 5];
const emptyArr = [];

// square() must return a copy of the array, containing all values squared
//map math.pow

Array.prototype.square = function () {
  return this.map(el => Math.pow(el, 2));
};

// cube() must return a copy of the array, containing all values cubed
//map math.pow cubed

Array.prototype.cube = function () {
  return this.map(el => Math.pow(el, 3));
};

// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
//reduce , if else for the empty array

Array.prototype.average = function () {
  return this.reduce((acc, c) => acc + c, 0) / this.length;
};

// sum() must return the sum of all array values
// reduce

Array.prototype.sum = function () {
  return this.reduce((acc, c) => acc + c, 0);
};

// even() must return an array of all even numbers

Array.prototype.even = function () {
  return this.filter(el => el % 2 === 0);
};

// odd() must return an array of all odd numbers

Array.prototype.odd = function () {
  return this.filter(el => el % 2 !== 0);
};

// Note: the original array must not be changed in any case!

//P: array, integers, whole numbers,

// const arr = [];

// function test() {
//   if (arr === []) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// test();
