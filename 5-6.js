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