//Given an array of integers, find the Nth smallest element in this array of ingeters.

//array, not empty, only numbers, can be negative, datatype is number
//given N whihc is a number,

//return a number

// nthSmallest([3,1,2] ,2) ==> return (2)
// nthSmallest([15,20,7,10,4,3] ,3) ==> return (7)
// nthSmallest([15,20,7,10,4,3] ,3) ==> return (7)
// nthSmallest([177,225,243,-169,-12,-5,2,92] ,5) ==> return (92)

// function nthSmallest(arr, num){
//   //sort arr, take the num as the index, arr[num - 1]
//   let sorted = arr.sort((a,b) => a - b)
//   return sorted[num - 1]
// }

const nthSmallest = (arr, num) => arr.sort((a, b) => a - b)[num - 1];

console.log(nthSmallest([3, 1, 2], 2), 2);
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5), 92);
