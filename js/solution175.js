//given a string of words, return the length of the shortest word

//words sep by a space, all letters,

//return a number that represents the length of the shortest word

// 'one two three' -> 3
// 'pizza popcorn' -> 5
// 'A monkey likes bananas' -> 1

// function getShortest(str){
//   //split and map the length of each item

//   let arr = str.split(' ').map(el => el = el.length)

//   // Math.min[...arr]
//   return Math.min(...arr)
// }

const getShortest = str => Math.min(...str.split(' ').map(el => el.length));

console.log(getShortest('one two three'), 3);
console.log(getShortest('pizza popcorn'), 5);
console.log(getShortest('A monkey likes bananas'), 1);
