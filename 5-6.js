//Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]
// The websites array has already been defined for you using the following code:
// var websites = [];

websites.push('codewars')

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

function printArray(array){
    return array.join(',')
  }

//Find the mean (average) of a list of numbers in an array.

const findAverage = nums => nums.reduce((acc,c) => acc + c) / nums.length

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.


function addLength(str) {
    let arr = str.split(' ')
    return arr.map((el, i) => `${el} ${String(arr[i].length)}`)
  }
  