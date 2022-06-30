// write function that takes an array of numbers and returns the sum

//Params: negative positive floats or int,  not empty array same data type

//Return: number

function sum(numArr){
    // reduce on array
    return numArr.reduce((acc, c) => acc + c)
}

//Examples

sum([1,2,3,4]) // 10
sum([2,2,2]) // 6
sum([1.2, 2.5]) // 3.7
sum([-5, -7, 6]) // -6